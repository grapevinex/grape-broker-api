import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common'
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AlpacaAccountsService } from '../alpaca/service/alpaca.accounts.service'
import { AccountDto, CreateAccountDto, CipDto } from './dto/accounts.dto'
import { AccountStatus } from './interface/accounts.interface'
import { HttpExceptionFilter } from '../common/filters/http-expeption.filter'
import { HttpResponseInterceptor } from '../common/interceptors/http-response.interceptor'

@ApiTags('Accounts')
@Controller({
  path: 'broker',
  version: '1',
})
@UseFilters(HttpExceptionFilter)
@UseInterceptors(HttpResponseInterceptor)
export class AccountsController {
  constructor(private AlpacaAccountsService: AlpacaAccountsService) {}

  @Get('accounts')
  @ApiResponse({
    status: 200,
    type: [AccountDto],
  })
  @ApiQuery({
    name: 'query',
    required: false,
    description:
      'Pass space-delimited tokens. The response will contain accounts that match with each of the tokens (logical AND). A match means the token is present in either the account’s associated account number, phone number, name, or e-mail address (logical OR).',
  })
  @ApiQuery({
    name: 'created_after',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'created_before',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'status',
    enum: AccountStatus,
    required: false,
  })
  @ApiQuery({
    name: 'sort',
    enum: ['asc', 'desc'],
    description: 'Defaults to desc',
    required: false,
  })
  @ApiQuery({
    name: 'entities',
    type: String,
    description: 'Comma-delimited entity names to include in the response',
    required: false,
  })
  async getAll(
    @Query('query') query?: string,
    @Query('created_after') created_after?: string,
    @Query('created_before') created_before?: string,
    @Query('status') status?: AccountStatus,
    @Query('sort') sort = 'desc',
    @Query('entities') entities?: string,
  ) {
    return this.AlpacaAccountsService.getAllAccounts({
      query,
      created_after,
      created_before,
      status,
      sort,
      entities,
    })
  }

  @Get('account/:id')
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
  getOne(@Param('id') id: string) {
    return this.AlpacaAccountsService.getAccount(id)
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
  @Post('account')
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.AlpacaAccountsService.createAccount(createAccountDto)
  }

  @ApiParam({
    name: 'id',
    type: String,
    format: 'uuid',
    description: 'Account identifier',
  })
  @ApiResponse({
    status: 200,
  })
  @ApiResponse({
    status: 422,
  })
  @Post('accounts/:id/cip')
  createAccountCip(@Param('id') id: string, @Body() CipDto: CipDto) {
    return this.AlpacaAccountsService.createAccountCip(id, CipDto)
  }

  @ApiParam({
    name: 'id',
    type: String,
    format: 'uuid',
    description: 'Account identifier',
  })
  @ApiResponse({
    status: 404,
    description: 'Requested resource not found',
  })
  @Get('account:id/cip')
  getAccountCip(@Param('id') id: string) {
    return this.AlpacaAccountsService.getAccountCip(id)
  }
}
