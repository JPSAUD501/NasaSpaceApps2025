import { Injectable } from '@nestjs/common'
import { CreateMissionRequestDto, CreateMissionResponseDto } from './dto/create-mission'
import { EvaluateHabitatPlanRequestDto, EvaluateHabitatPlanResponseDto } from './dto/evaluate-habitat-plan'

@Injectable()
export class MissionService {
  async create (dto: CreateMissionRequestDto): Promise<CreateMissionResponseDto> {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return {
      name: 'TODO',
      description: 'TODO',
      duration: 0,
      crew_size: 0,
      habitat_floors: [],
      habitat_modules: []
    }
  }

  async evaluateHabitatPlan (dto: EvaluateHabitatPlanRequestDto): Promise<EvaluateHabitatPlanResponseDto> {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return {
      score: 0,
      score_reason: 'TODO',
      improvements_points: []
    }
  }
}
