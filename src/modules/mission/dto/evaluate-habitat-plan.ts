import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { ModuleTypes } from './shared.dto'

export const EvaluateHabitatPlanRequestSchema = z.object({
  floors: z.array(z.object({
    level: z.number(),
    matrix: z.array(z.array(z.object({
      type: ModuleTypes
    }).nullable()))
  }))
})

export const EvaluateHabitatPlanResponseSchema = z.object({
  score: z.number(),
  score_reason: z.string(),
  improvements_points: z.array(z.string())
})

export class EvaluateHabitatPlanRequestDto extends createZodDto(EvaluateHabitatPlanRequestSchema) {}
export class EvaluateHabitatPlanResponseDto extends createZodDto(EvaluateHabitatPlanResponseSchema) {}
