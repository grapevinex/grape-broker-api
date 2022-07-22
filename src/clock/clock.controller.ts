import { Controller, Get } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { ClockDto } from './dto/clock.dto'
import { ClockService } from './service/clock.service'

@ApiTags('Clock')
@Controller({
  path: 'clock',
  version: '1',
})
export class ClockController {
  constructor(private ClockService: ClockService) {}

  @ApiResponse({
    status: 200,
    type: [ClockDto],
  })
  @Get()
  clock() {
    return this.ClockService.clock()
  }
}
