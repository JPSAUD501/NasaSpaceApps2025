import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { EvaluatorFactorSchema, ModuleTypes } from './shared.dto'
import { CreateMissionResponseSchema } from './create-mission.dto'

export const EvaluateHabitatPlanRequestSchema = z.object({
  floors: z.array(z.object({
    matrix: z.array(z.array(z.object({
      type: ModuleTypes
    }).nullable()))
  })),
  mission: CreateMissionResponseSchema
})

export const EvaluateHabitatPlanResponseSchema = z.object({
  score: z.number(),
  worse_points: z.array(EvaluatorFactorSchema),
  improvements_points: z.array(EvaluatorFactorSchema),
  images: z.array(z.object({
    name: z.string(),
    base64: z.string()
  })),
  pdf_base64: z.string().optional()
})

export class EvaluateHabitatPlanRequestDto extends createZodDto(EvaluateHabitatPlanRequestSchema) {}
export class EvaluateHabitatPlanResponseDto extends createZodDto(EvaluateHabitatPlanResponseSchema) {}
