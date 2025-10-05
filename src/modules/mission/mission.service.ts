import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
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
import { chromium } from 'playwright'

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

const PDF_STYLES = `
  :root { color-scheme: light; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
         "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif; }
  .markdown-body { box-sizing: border-box; max-width: 840px; margin: 0 auto; padding: 40px; }
  h1,h2,h3,h4 { line-height: 1.25; }
  pre, code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace; font-size: 0.92rem; }
  pre { background: #f6f8fa; padding: 12px; border-radius: 8px; overflow: auto; }
  blockquote { border-left: 4px solid #e5e7eb; padding-left: 12px; color: #4b5563; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #e5e7eb; padding: 6px 10px; }
  img { max-width: 100%; }
`

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
    const sanitizedMarkdown = this.sanitizeMarkdownOutput(pdfContent)
    const pdfBuffer = await this.renderMarkdownToPdf(sanitizedMarkdown)
    const pdfBase64 = pdfBuffer.toString('base64')
    return {
      score: finalScore,
      worse_points: orderedEvaluatorFactors.slice(0, 3),
      improvements_points: orderedEvaluatorFactors.slice(-3).reverse(),
      images: MOCK_EVALUATION_IMAGES,
      pdf_base64: pdfBase64
    }
  }

  private sanitizeMarkdownOutput (rawContent: string): string {
    const trimmed = rawContent.trim()
    if (!trimmed.startsWith('```')) return trimmed

    const firstLineBreakIndex = trimmed.indexOf('\n')
    if (firstLineBreakIndex === -1) return trimmed

    const contentWithoutFence = trimmed.slice(firstLineBreakIndex + 1)
    const closingIndex = contentWithoutFence.lastIndexOf('```')
    if (closingIndex === -1) return trimmed

    const markdown = contentWithoutFence.slice(0, closingIndex).trim()
    return markdown
  }

  private async renderMarkdownToPdf (markdown: string): Promise<Buffer> {
    const { marked } = await import('marked')
    const htmlBody = marked.parse(markdown)

    const htmlDocument = `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Mission Plan</title>
      <style>${PDF_STYLES}</style>
    </head>
    <body>
      <article class="markdown-body">
        ${htmlBody}
      </article>
    </body>
  </html>`

    const browser = await chromium.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    try {
      const page = await browser.newPage()
      await page.setContent(htmlDocument, { waitUntil: 'networkidle' })
      const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '20mm', right: '16mm', bottom: '20mm', left: '16mm' }
      })
      return pdf
    } finally {
      await browser.close()
    }
  }
}
