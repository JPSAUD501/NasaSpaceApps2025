import { Module } from '@nestjs/common'
import { MissionService } from './mission.service'
import { MissionController } from './mission.controller'
import { OpenRouterModule } from '../../providers/openrouter/openrouter.module'

@Module({
  imports: [OpenRouterModule],
  providers: [MissionService],
  controllers: [MissionController],
  exports: [MissionService]
})
export class MissionModule {}
