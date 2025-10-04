import { Controller, Post, Body } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateMissionRequestDto, CreateMissionResponseDto } from './dto/create-mission'
import { MissionService } from './mission.service'

@ApiTags('Mission')
@Controller('mission')
export class MissionController {
  constructor (private readonly missionService: MissionService) {}

  @Post()
  @ApiResponse({ status: 201, type: CreateMissionResponseDto })
  async create (@Body() createMissionRequestDto: CreateMissionRequestDto): Promise<CreateMissionResponseDto> {
    return await this.missionService.create(createMissionRequestDto)
  }
}
