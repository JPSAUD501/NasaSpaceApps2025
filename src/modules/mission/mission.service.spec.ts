import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import { Test, TestingModule } from '@nestjs/testing'
import { ConfigModule } from '@nestjs/config'
import { MissionService } from './mission.service'
import { OpenRouterModule } from '../../providers/openrouter/openrouter.module'
import { CreateMissionRequestSchema, CreateMissionResponseSchema } from './dto/create-mission.dto'
import { EvaluateHabitatPlanRequestSchema, EvaluateHabitatPlanResponseSchema } from './dto/evaluate-habitat-plan.dto'
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

  it('evaluates a habitat plan using the generated mission plan', async () => {
    const createMissionRequest = {
      name: 'SofaPraDormir',
      architect_name: 'Anonimo',
      description: 'Explorar o planeta marte para encontrar sofas naturais e estudar sua viabilidade para o descanso da tripulação e exportação marciana.',
      crew_size: 5,
      destination: 'mars'
    } satisfies z.input<typeof CreateMissionRequestSchema>

    const missionRequest = CreateMissionRequestSchema.parse(createMissionRequest)

    const missionPlan = CreateMissionResponseSchema.parse(await service.create(missionRequest))

    const gridSize = Math.max(2, Math.ceil(Math.sqrt(Math.max(1, missionPlan.habitat_modules.length))))
    const modulesPerFloor = gridSize * gridSize
    const floorsCount = Math.max(1, Math.ceil(missionPlan.habitat_modules.length / modulesPerFloor))

    type ModuleCell = { type: z.infer<typeof ModuleTypes> } | null

    const floors = Array.from({ length: floorsCount }, () => ({
      matrix: Array.from({ length: gridSize }, () =>
        Array.from({ length: gridSize }, () => null as ModuleCell)
      )
    }))

    missionPlan.habitat_modules.forEach((module, index) => {
      const floorIndex = Math.floor(index / modulesPerFloor)
      const slotIndex = index % modulesPerFloor
      const row = Math.floor(slotIndex / gridSize)
      const column = slotIndex % gridSize
      floors[floorIndex].matrix[row][column] = { type: module.type }
    })

    const evaluationRequest = EvaluateHabitatPlanRequestSchema.parse({
      floors,
      mission: missionPlan
    })

    const evaluationResponse = EvaluateHabitatPlanResponseSchema.parse(
      await service.evaluateHabitatPlan(evaluationRequest)
    )

    expect(evaluationResponse.score).toBeGreaterThanOrEqual(-100)
    expect(evaluationResponse.improvements_points.length).toBeGreaterThan(0)
    expect(evaluationResponse.worse_points.length).toBeGreaterThan(0)
    expect(evaluationResponse.images.length).toBeGreaterThan(0)
    expect((evaluationResponse.pdf_base64?.length ?? 0)).toBeGreaterThan(0)
  }, 120000)
})
