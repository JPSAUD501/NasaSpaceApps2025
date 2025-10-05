import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import { Test, TestingModule } from '@nestjs/testing'
import { ConfigModule } from '@nestjs/config'
import { MissionService } from './mission.service'
import { OpenRouterModule } from '../../providers/openrouter/openrouter.module'
import { CreateMissionRequestSchema, CreateMissionResponseSchema } from './dto/create-mission.dto'
import { z } from 'zod'

describe('MissionService', () => {
  let moduleRef: TestingModule
  let service: MissionService

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        OpenRouterModule
      ],
      providers: [MissionService]
    }).compile()
    service = moduleRef.get(MissionService)
  })

  afterAll(async () => {
    await moduleRef.close()
  })

  it('calculates the 3D distance between two modules', async () => {
    const distance = await service.calculateModuleDistance([
      { floor: 1, x: 1, y: 1 },
      { floor: 3, x: 4, y: 5 }
    ])

    expect(distance).toBeGreaterThan(0)
  })

  it('derives the maximum distance for a habitat grid', async () => {
    const floors = 3
    const xWidth = 4
    const yWidth = 5

    const result = await service.calculateMaxDistance(floors, xWidth, yWidth)

    expect(result).toBeGreaterThan(0)
  })

  it('creates a mission plan using the OpenRouter API', async () => {
    const createMissionRequest = {
      name: 'SofaPraDormir',
      architect_name: 'Anonimo',
      description: 'Explorar o planeta marte para encontrar sofas naturais e estudar sua viabilidade para o descanso da tripulação e exportação marciana.',
      crew_size: 5,
      destination: 'mars'
    } satisfies z.input<typeof CreateMissionRequestSchema>

    const request = CreateMissionRequestSchema.parse(createMissionRequest)

    const response = CreateMissionResponseSchema.parse(await service.create(request))

    console.debug(response)

    expect(response).toBeDefined()
  }, 90000)
})
