import { Module } from '@nestjs/common'
import { MissionService } from './mission.service'
import { MissionController } from './mission.controller'

@Module({
  imports: [],
  providers: [MissionService],
  controllers: [MissionController],
  exports: [MissionService]
})
export class MissionModule {}
