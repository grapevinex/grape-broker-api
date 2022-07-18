import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { AlpacaAccountsService } from '../alpaca/service/alpaca.accounts.service';
import { ClockDto } from './dto/clock.dto';

@ApiTags('Clock')
@Controller({
  path: 'clock',
  version: '1'
})
export class ClockController {
  constructor(private alpacaAccountService: AlpacaAccountsService) {
  }

  @ApiResponse({
    status: 200,
    type: [ClockDto],
  })
  @Get()
  clock(): Observable<ClockDto[]> {
    return this.alpacaAccountService.clock()
  }
}
