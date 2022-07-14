import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { Account } from '../../entities/account.entity'
import { CreateAccountDto } from '../../dtos/create-account.dto'
import { AlpacaService } from '../../alpaca/services/alpaca.service'
import { AccountDto } from '../../dtos/account.dto';

@ApiTags('Broker account')
@Controller({
  path: 'broker/account',
  version: '1',
})
export class AccountController {
  constructor(private alpacaService: AlpacaService) {}

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Returns a specific account',
    type: Account,
  })
  getOne(@Param('id') id: string): Account {
    return {}
  }

  @ApiResponse({
    status: 201,
    description: 'The account has been successfully created.',
    type: AccountDto,
  })
  @ApiResponse({
    status: 409,
    description: 'An account with the requested email address already exists'
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
