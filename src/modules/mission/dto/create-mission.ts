import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { ModuleTypes } from './shared.dto'

export const CreateMissionRequestSchema = z.object({
  player_name: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
  crew_size: z.number().min(1).max(20),
  duration: z.number().min(1).max(1000),
  destination: z.enum(['moon', 'mars', 'earth_orbit'])
})

export const CreateMissionResponseSchema = z.object({
  name: z.string(),
  description: z.string(),
  duration: z.number(),
  crew_size: z.number(),
  habitat_floors: z.array(z.object({
    level: z.number(),
    x_length: z.number(),
    y_length: z.number()
  })),
  habitat_modules: z.array(z.object({
    uuid: z.string(),
    name: z.string(),
    reason: z.string(),
    type: ModuleTypes,
    relationship_with: z.object({
      type: ModuleTypes,
      points: z.number().min(-100).max(100),
      reason: z.string().min(1).max(300)
    })
  }))
})

export class CreateMissionRequestDto extends createZodDto(CreateMissionRequestSchema) {}
export class CreateMissionResponseDto extends createZodDto(CreateMissionResponseSchema) {}
