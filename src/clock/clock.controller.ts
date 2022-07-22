import { Controller, Get, UseFilters, UseInterceptors } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { ClockDto } from './dto/clock.dto'
import { AlpacaClockService } from '../alpaca/service/alpaca.clock.service'
import { HttpExceptionFilter } from '../common/filters/http-expeption.filter'
import { HttpResponseInterceptor } from '../common/interceptors/http-response.interceptor'

@ApiTags('Clock')
@Controller({
  path: 'clock',
  version: '1',
})
@UseFilters(HttpExceptionFilter)
@UseInterceptors(HttpResponseInterceptor)
export class ClockController {
  constructor(private alpacaClockService: AlpacaClockService) {}

  @ApiResponse({
    status: 200,
    type: [ClockDto],
  })
  @Get()
  clock() {
    return this.alpacaClockService.clock()
  }
}
