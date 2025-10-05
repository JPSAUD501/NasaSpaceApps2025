import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import { Test, TestingModule } from '@nestjs/testing'
import { ConfigModule } from '@nestjs/config'
import { MissionService } from './mission.service'
import { OpenRouterModule } from '../../providers/openrouter/openrouter.module'
import { EvaluateHabitatPlanRequestSchema } from './dto/evaluate-habitat-plan.dto'
import { CreateMissionRequestSchema } from './dto/create-mission.dto'
import { ModuleTypes } from './dto/shared.dto'

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

  it('evaluates a simple habitat plan and returns a perfect score when positive relationships dominate', async () => {
    const dto = EvaluateHabitatPlanRequestSchema.parse({
      floors: [
        {
          matrix: [
            [
              { type: 'radiation_shelter' },
              null
            ],
            [
              { type: 'private_crew_quarters' },
              null
            ]
          ]
        }
      ]
    })

    const evaluation = await service.evaluateHabitatPlan(dto)

    expect(evaluation.score).toBe(100)
    expect(evaluation.worse_points).toHaveLength(2)
    expect(evaluation.improvements_points).toHaveLength(2)

    const worstRelationships = evaluation.worse_points.map(factor => ({
      type: factor.module_type,
      with: factor.with_module_type,
      points: factor.points
    }))

    expect(worstRelationships).toContainEqual({
      type: 'private_crew_quarters',
      with: 'radiation_shelter',
      points: 100
    })

    expect(worstRelationships).toContainEqual({
      type: 'radiation_shelter',
      with: 'private_crew_quarters',
      points: 100
    })
  })

  it('creates a mission plan using the OpenRouter API', async () => {
    const request = CreateMissionRequestSchema.parse({
      name: 'Integration Mission',
      player_name: 'Test Player',
      description: 'Integration test mission to validate OpenRouter response.',
      crew_size: 4,
      duration: 180,
      destination: 'moon'
    })

    const response = await service.create(request)

    console.debug(response)

    expect(response.name).toBe(request.name)
    expect(response.duration).toBe(request.duration)
    expect(response.crew_size).toBe(request.crew_size)
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
  }, 20000)
})
