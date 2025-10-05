import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import { Test, TestingModule } from '@nestjs/testing'
import { ConfigModule } from '@nestjs/config'
import { MissionService } from './mission.service'
import { OpenRouterModule } from '../../providers/openrouter/openrouter.module'
import { EvaluateHabitatPlanRequestSchema } from './dto/evaluate-habitat-plan.dto'
import { CreateMissionRequestSchema, CreateMissionResponseSchema } from './dto/create-mission.dto'
import { ModuleTypes } from './dto/shared.dto'
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

    const xDistance = 3
    const yDistance = 4
    const horizontalDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
    const floorDistance = 4
    const expectedDistance = Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(floorDistance, 2))

    expect(distance).toBeCloseTo(expectedDistance)
  })

  it('derives the maximum distance for a habitat grid', async () => {
    const floors = 3
    const xWidth = 4
    const yWidth = 5

    const expected = await service.calculateModuleDistance([
      { floor: 1, x: 1, y: 1 },
      { floor: floors, x: xWidth, y: yWidth }
    ])

    const result = await service.calculateMaxDistance(floors, xWidth, yWidth)

    expect(result).toBeCloseTo(expected)
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

    expect(response.name).toBe(request.name)
    expect(response.crew_size).toBe(request.crew_size)
    expect(response.duration).toBeGreaterThanOrEqual(1)
    expect(response.duration).toBeLessThanOrEqual(1000)
    expect(Number.isInteger(response.duration)).toBe(true)
    expect(response.formal_description.length).toBeGreaterThan(0)
    expect(response.habitat_dimensions.x_width).toBeGreaterThan(0)
    expect(response.habitat_dimensions.y_width).toBeGreaterThan(0)
    expect(response.habitat_modules.length).toBeGreaterThan(0)

    for (const module of response.habitat_modules) {
      expect(module.uuid.length).toBeGreaterThan(0)
      expect(module.name.length).toBeGreaterThan(0)
      expect(module.brief_reason.length).toBeGreaterThan(0)
      const typeCheck = ModuleTypes.safeParse(module.type)
      expect(typeCheck.success).toBe(true)
    }

    const evaluationRequest = {
      mission: response,
      floors: [
        {
          matrix: [
            [
              { type: 'private_crew_quarters' },
              { type: 'radiation_shelter' }
            ],
            [
              { type: 'common_kitchen_and_mess' },
              { type: 'dedicated_storage_logistics' }
            ]
          ]
        }
      ]
    } satisfies z.input<typeof EvaluateHabitatPlanRequestSchema>

    const evaluation = await service.evaluateHabitatPlan(
      EvaluateHabitatPlanRequestSchema.parse(evaluationRequest)
    )

    expect(evaluation.score).toBeGreaterThanOrEqual(-100)
    expect(evaluation.score).toBeLessThanOrEqual(100)
    expect(evaluation.worse_points.length).toBeGreaterThan(0)
    expect(evaluation.improvements_points.length).toBeGreaterThan(0)

    for (const factor of [...evaluation.worse_points, ...evaluation.improvements_points]) {
      const typeCheck = ModuleTypes.safeParse(factor.module_type)
      const withTypeCheck = ModuleTypes.safeParse(factor.with_module_type)
      expect(typeCheck.success).toBe(true)
      expect(withTypeCheck.success).toBe(true)
      expect(factor.reason.length).toBeGreaterThan(0)
    }

    expect(evaluation.images).toHaveLength(2)
    evaluation.images.forEach(image => {
      expect(image.name.length).toBeGreaterThan(0)
      expect(image.base64.length).toBeGreaterThan(0)
    })

    expect(evaluation.pdf_base64).toBeDefined()
    expect((evaluation.pdf_base64 ?? '').length).toBeGreaterThan(0)
  }, 90000)
})
