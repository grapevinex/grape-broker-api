import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ClockController } from './clock.controller'
import { ClockService } from './service/clock.service'

@Module({
  imports: [HttpModule],
  providers: [ClockService],
  controllers: [ClockController],
})
export class ClockModule {}
