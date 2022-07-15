import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountDto, AccountStatus } from '../../dtos/account.dto';
import { AlpacaService } from '../../alpaca/services/alpaca.service';
import { SubmitCIPDto } from '../../dtos/submit-cip.dto';

@ApiTags('Broker accounts')
@Controller({
  path: 'broker/accounts',
  version: '1',
})
export class AccountsController {
  constructor(private alpacaService: AlpacaService) {
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: [AccountDto]
  })
  @ApiQuery({
    name: 'query',
    required: false,
    description: 'Pass space-delimited tokens. The response will contain accounts that match with each of the tokens (logical AND). A match means the token is present in either the account’s associated account number, phone number, name, or e-mail address (logical OR).'
  })
  @ApiQuery({
    name: 'created_after',
    type: String,
    required: false
  })
  @ApiQuery({
    name: 'created_before',
    type: String,
    required: false
  })
  @ApiQuery({
    name: 'status',
    enum: AccountStatus,
    required: false
  })
  @ApiQuery({
    name: 'sort',
    enum: ['asc','desc'],
    description: 'Defaults to desc',
    required: false
  })
  @ApiQuery({
    name: 'entities',
    type: String,
    description: 'Comma-delimited entity names to include in the response',
    required: false
  })
  async getAll(
    @Query('query') query?: string,
    @Query('created_after') created_after?: string,
    @Query('created_before') created_before?: string,
    @Query('status') status?: AccountStatus,
    @Query('sort') sort: string = 'desc',
    @Query('entities') entities?: string
  ) {
    return this.alpacaService.getAllAccounts({
      query,
      created_after,
      created_before,
      status,
      sort,
      entities
    })
  }

  @ApiParam({
    name: 'id',
    type: String,
    format: 'uuid',
    description: 'Account identifier'
  })
  @ApiResponse({
    status: 200
  })
  @ApiResponse({
    status: 422
  })
  @Post(':id/cip')
  uploadCIPInformation(@Param('id') id: string, @Body() submitCIPDto: SubmitCIPDto) {
    return this.alpacaService.uploadCIPInformation(id, submitCIPDto)
  }
}
