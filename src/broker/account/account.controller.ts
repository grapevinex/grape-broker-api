import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Observable } from 'rxjs'
import { CreateAccountDto } from '../../dtos/create-account.dto'
import { AlpacaService } from '../../alpaca/services/alpaca.service'
import { AccountDto } from '../../dtos/account.dto'

@ApiTags('Broker account')
@Controller({
  path: 'broker/account',
  version: '1',
})
export class AccountController {
  constructor(private alpacaService: AlpacaService) {}

  @Get('/:id')
  @ApiParam({
    name: 'id',
    type: String,
    format: 'uuid',
    description: 'Account identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a specific account',
    type: AccountDto,
  })
  getOne(@Param('id') id: string): Observable<AccountDto> {
    return this.alpacaService.getAccount(id)
  }

  @ApiResponse({
    status: 201,
    description: 'The account has been successfully created.',
    type: AccountDto,
  })
  @ApiResponse({
    status: 409,
    description: 'An account with the requested email address already exists',
  })
  @ApiResponse({
    status: 422,
    description:
      'Onfido applicant not yet created for account. If you haven’t already contacted Alapca to enable Onfido, please do so.',
  })
  @ApiResponse({
    status: 500,
    description: 'Some server error occurred. Please contact Alpaca.',
  })
  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.alpacaService.createAccount(createAccountDto)
  }
}
