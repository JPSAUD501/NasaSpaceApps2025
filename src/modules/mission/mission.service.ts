import { Injectable } from '@nestjs/common'
import { CreateMissionRequestDto, CreateMissionResponseDto } from './dto/create-mission.dto'
import { EvaluateHabitatPlanRequestDto, EvaluateHabitatPlanResponseDto } from './dto/evaluate-habitat-plan.dto'
import { z } from 'zod'
import { EvaluatorFactorSchema, ModuleRelationSchema, ModuleRelationships, ModuleTypes } from './dto/shared.dto'
import { CalculateModuleDistanceDto } from './dto/calculate-module-distance.dto'

const FLOOR_HEIGHT = 2

@Injectable()
export class MissionService {
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

  async create (dto: CreateMissionRequestDto): Promise<CreateMissionResponseDto> {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return {
      name: 'TODO',
      description: 'TODO',
      duration: 0,
      crew_size: 0,
      habitat_dimensions: { x_width: 0, z_height: 0 },
      habitat_modules: []
    }
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
    return {
      score: finalScore,
      worse_points: orderedEvaluatorFactors.slice(0, 3),
      improvements_points: orderedEvaluatorFactors.slice(-3).reverse()
    }
  }
}
