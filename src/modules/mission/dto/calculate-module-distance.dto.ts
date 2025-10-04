import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const CalculateModuleDistanceSchema = z.tuple([
  z.object({
    floor: z.number().min(0),
    x: z.number().min(0),
    y: z.number().min(0)
  }),
  z.object({
    floor: z.number().min(0),
    x: z.number().min(0),
    y: z.number().min(0)
  })
])

export class CalculateModuleDistanceDto extends createZodDto(CalculateModuleDistanceSchema) {}
