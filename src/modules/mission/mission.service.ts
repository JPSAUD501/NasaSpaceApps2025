import { existsSync, readFileSync } from 'node:fs'
import { join, resolve as resolvePath } from 'node:path'
import { Injectable } from '@nestjs/common'
import { CreateMissionRequestDto, CreateMissionResponseDto } from './dto/create-mission.dto'
import { EvaluateHabitatPlanRequestDto, EvaluateHabitatPlanResponseDto } from './dto/evaluate-habitat-plan.dto'
import { z } from 'zod'
import { EvaluatorFactorSchema, ModuleRelationSchema, ModuleRelationships, ModuleTypes } from './dto/shared.dto'
import { CalculateModuleDistanceDto } from './dto/calculate-module-distance.dto'
import { OpenRouterService } from '../../providers/openrouter/openrouter.service'
import { zodResponseFormat } from 'openai/helpers/zod'
import nasaPapers from './prompts/nasa-papers'
import createMission from './prompts/create-mission'
import createMissionPdf from './prompts/create-mission-pdf'
import projectDocs from './prompts/project-docs'
import { spawn } from 'node:child_process'

const FLOOR_HEIGHT = 2
const FILES_DIRECTORIES = [
  join(process.cwd(), 'src', 'files'),
  join(__dirname, '..', '..', 'files')
]

const loadFileAsBase64 = (filename: string): string => {
  for (const directory of FILES_DIRECTORIES) {
    const filePath = join(directory, filename)
    if (existsSync(filePath)) {
      return readFileSync(filePath).toString('base64')
    }
  }
  throw new Error(`Static asset not found: ${filename}`)
}

const MOCK_EVALUATION_IMAGES: EvaluateHabitatPlanResponseDto['images'] = [
  {
    name: 'alert-nebula-logo.png',
    base64: loadFileAsBase64('Logo _OutOfSpace_ com Nebulosa Astral.png')
  },
  {
    name: 'braces-pixel-logo.png',
    base64: loadFileAsBase64('Logo do OutOfSpace no Space Apps.png')
  }
]

@Injectable()
export class MissionService {
  constructor (
    private readonly openrouterService: OpenRouterService
  ) {}

  async create (dto: CreateMissionRequestDto): Promise<CreateMissionResponseDto> {
    const responseSchema = z.object({
      mission_duration_days: z.number().int().min(1).max(1000),
      formal_description: z.string(),
      habitat: z.array(z.object({
        name: z.string(),
        brief_reason: z.string(),
        type: z.enum(ModuleTypes.options),
        square_meters: z.number()
      }))
    })
    const parsedPrompt = createMission
      .replace('{{NASA-PAPERS}}', nasaPapers)
      .replace('{{MISSION_NAME}}', dto.name)
      .replace('{{MISSION_OBJECTIVE}}', dto.description)
      .replace('{{DESTINATION}}', dto.destination)
      .replace('{{CREW_SIZE}}', dto.crew_size.toString())
      .replace('{{MODULE_TYPES}}', ModuleTypes.options.map(o => o).join(', '))
    const response = await this.openrouterService.getClient().chat.completions.create({
      model: 'x-ai/grok-4-fast',
      messages: [
        { role: 'user', content: parsedPrompt }
      ],
      response_format: zodResponseFormat(responseSchema, 'mission-schema')
    })
    const rawContent = response.choices[0].message?.content
    const parsedResponse = responseSchema.parse(JSON.parse(rawContent ?? '{}'))
    let totalSpace = 0
    for (const module of parsedResponse.habitat) {
      totalSpace += module.square_meters
    }
    const habitatArea = Math.sqrt(totalSpace) * 1
    const parsedHabitatArea = Math.floor(habitatArea)
    return {
      name: dto.name,
      formal_description: parsedResponse.formal_description,
      duration: parsedResponse.mission_duration_days,
      crew_size: dto.crew_size,
      habitat_dimensions: {
        x_width: parsedHabitatArea,
        y_width: parsedHabitatArea
      },
      habitat_modules: parsedResponse.habitat.map(module => {
        const uuid = crypto.randomUUID()
        return {
          uuid,
          name: module.name,
          brief_reason: module.brief_reason,
          type: module.type,
          quantity: module.square_meters
        }
      })
    }
  }

  async calculateMaxDistance (floors: number, xWidth: number, yWidth: number): Promise<number> {
    return await this.calculateModuleDistance([
      { floor: 1, x: 1, y: 1 },
      { floor: floors, x: xWidth, y: yWidth }
    ])
  }

  async calculateModuleDistance (dto: CalculateModuleDistanceDto): Promise<number> {
    const moduleA = dto[0]
    const moduleB = dto[1]
    const xDistance = Math.abs(moduleA.x - moduleB.x)
    const yDistance = Math.abs(moduleA.y - moduleB.y)
    const horizontalDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
    const floorDistance = Math.abs(moduleA.floor - moduleB.floor) * FLOOR_HEIGHT
    const totalDistance = Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(floorDistance, 2))
    return totalDistance
  }

  async evaluateHabitatPlan (dto: EvaluateHabitatPlanRequestDto): Promise<EvaluateHabitatPlanResponseDto> {
    const relations: Array<z.infer<typeof ModuleRelationSchema>> = []
    const modules: Array<{ floor: number, module_type: z.infer<typeof ModuleTypes>, x: number, y: number }> = []
    dto.floors.forEach((floor, floorIndex) => {
      floor.matrix.forEach((row, x) => {
        row.forEach((module, y) => {
          if (module != null) {
            modules.push({ floor: floorIndex, module_type: module.type, x, y })
          }
        })
      })
    })
    const minDistance = 1
    const maxDistance = await this.calculateMaxDistance(dto.floors.length, dto.floors[0].matrix.length, dto.floors[0].matrix[0].length)
    for (let a = 0; a < modules.length; a++) {
      for (let b = 0; b < modules.length; b++) {
        const moduleA = modules[a]
        const moduleB = modules[b]
        if (moduleA.module_type === moduleB.module_type) continue
        const distance = await this.calculateModuleDistance([{
          floor: moduleA.floor,
          x: moduleA.x,
          y: moduleA.y
        }, {
          floor: moduleB.floor,
          x: moduleB.x,
          y: moduleB.y
        }])
        const moduleRelation = ModuleRelationships.find(r => {
          return (r.type === moduleA.module_type && r.with === moduleB.module_type)
        })
        if (moduleRelation === undefined) continue
        const points = Math.round(((maxDistance - distance) / (maxDistance - minDistance)) * moduleRelation.points)
        relations.push({
          type: moduleA.module_type,
          with: moduleB.module_type,
          distance,
          points
        })
      }
    }
    const evaluatorFactors: Array<z.infer<typeof EvaluatorFactorSchema>> = []
    for (const relation of relations) {
      const existing = evaluatorFactors.find(p => p.module_type === relation.type && p.with_module_type === relation.with)
      if (existing !== undefined) continue
      const sameTypeRelations = relations.filter(r => r.type === relation.type && r.with === relation.with)
      const totalPoints = sameTypeRelations.reduce((acc, curr) => acc + curr.points, 0)
      const averagePoints = totalPoints / sameTypeRelations.length
      const moduleRelation = ModuleRelationships.find(r => {
        return (r.type === relation.type && r.with === relation.with)
      })
      if (moduleRelation === undefined) continue
      evaluatorFactors.push({
        module_type: relation.type,
        with_module_type: relation.with,
        points: Math.round(averagePoints),
        reason: moduleRelation.reason
      })
    }
    const orderedEvaluatorFactors = evaluatorFactors.sort((a, b) => a.points - b.points)
    const totalPoints = relations.reduce((acc, curr) => acc + curr.points, 0)
    const finalScore = Math.round(totalPoints / relations.length)
    const prompt = createMissionPdf
      .replace('{{DOCS}}', projectDocs)
      .replace('{{MISSION_PLAN}}', JSON.stringify(dto.mission, null, 2))
    const response = await this.openrouterService.getClient().chat.completions.create({
      model: 'x-ai/grok-4-fast',
      messages: [
        { role: 'user', content: prompt }
      ]
    })
    const pdfContent = response.choices[0].message?.content ?? ''
    if (pdfContent.length <= 0) {
      throw new Error('Failed to generate PDF content for the habitat plan evaluation.')
    }
    const pdfBase64 = await this.mdToPdfBase64(pdfContent)
    return {
      score: finalScore,
      worse_points: orderedEvaluatorFactors.slice(0, 3),
      improvements_points: orderedEvaluatorFactors.slice(-3).reverse(),
      images: MOCK_EVALUATION_IMAGES,
      pdf_base64: pdfBase64
    }
  }

  async mdToPdfBase64 (md: string): Promise<string> {
    return await new Promise((resolve, reject) => {
      // Ajuste o caminho do script conforme sua estrutura:
      const scriptPath = resolvePath(process.cwd(), 'src', 'modules', 'mission', 'script.py')
      // Permite override via env (PYTHON=python, py, etc.)
      const pythonExe = 'python3'

      const proc = spawn(pythonExe, [scriptPath], {
        stdio: ['pipe', 'pipe', 'pipe']
      })

      let out = ''
      let err = ''

      proc.stdout.setEncoding('utf8')
      proc.stderr.setEncoding('utf8')

      proc.stdout.on('data', (chunk) => { out += chunk })
      proc.stderr.on('data', (chunk) => { err += chunk })

      proc.on('close', (code) => {
        const trimmed = out.trim()
        if (code === 0 && trimmed.length > 0) {
          resolve(trimmed) // base64 do PDF
        } else {
          reject(new Error(`md2pdf_base64.py falhou (code=${code}): ${(err.length > 0) || 'sem detalhes'}`))
        }
      })

      // Envia o Markdown para o stdin do script
      proc.stdin.write(md, 'utf8')
      proc.stdin.end()
    })
  }
}
