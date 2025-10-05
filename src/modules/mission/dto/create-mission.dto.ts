import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { ModuleTypes } from './shared.dto'

export const CreateMissionRequestSchema = z.object({
  name: z.string().min(1).max(100),
  architect_name: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
  crew_size: z.number().min(1).max(20),
  destination: z.enum(['moon', 'mars'])
})

export const CreateMissionResponseSchema = z.object({
  name: z.string(),
  formal_description: z.string(),
  duration: z.number().int().min(1).max(1000),
  crew_size: z.number(),
  habitat_dimensions: z.object({
    x_width: z.number(),
    y_width: z.number()
  }),
  habitat_modules: z.array(z.object({
    uuid: z.string(),
    name: z.string(),
    brief_reason: z.string(),
    type: ModuleTypes,
    quantity: z.number()
  }))
})

export class CreateMissionRequestDto extends createZodDto(CreateMissionRequestSchema) {}
export class CreateMissionResponseDto extends createZodDto(CreateMissionResponseSchema) {}
