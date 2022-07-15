import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AlpacaService } from '../alpaca/services/alpaca.service';

@ApiTags('Accounts CIP')
@Controller({
  path: 'accounts',
  version: '1',
})
export class AccountsController {
  constructor(private alpacaService: AlpacaService) {
  }

  @ApiParam({
    name: 'id',
    type: String,
    format: 'uuid',
    description: 'Account identifier'
  })
  @ApiResponse({
    status: 404,
    description: 'Requested resource not found'
  })
  @Get(':id/cip')
  getCIPInformation(@Param('id') id: string) {
    return this.alpacaService.getAccountCIP(id)
  }
}
