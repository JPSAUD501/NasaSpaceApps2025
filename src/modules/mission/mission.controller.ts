import { Controller, Post, Body } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateMissionRequestDto, CreateMissionResponseDto } from './dto/create-mission.dto'
import { MissionService } from './mission.service'
import { EvaluateHabitatPlanRequestDto, EvaluateHabitatPlanResponseDto } from './dto/evaluate-habitat-plan.dto'

@ApiTags('Mission')
@Controller('mission')
export class MissionController {
  constructor (private readonly missionService: MissionService) {}

  @Post('create')
  @ApiResponse({ status: 201, description: 'Mission created successfully.', type: CreateMissionResponseDto })
  async create (@Body() createMissionRequestDto: CreateMissionRequestDto): Promise<CreateMissionResponseDto> {
    return await this.missionService.create(createMissionRequestDto)
  }

  @Post('evaluate')
  @ApiResponse({ status: 201, description: 'Habitat plan evaluated successfully.', type: EvaluateHabitatPlanResponseDto })
  async evaluateHabitatPlan (@Body() dto: EvaluateHabitatPlanRequestDto): Promise<EvaluateHabitatPlanResponseDto> {
    return await this.missionService.evaluateHabitatPlan(dto)
  }
}
