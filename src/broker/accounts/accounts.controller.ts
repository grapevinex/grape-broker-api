import { Controller, Get, Post } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Broker accounts')
@Controller({
  path: 'broker/accounts',
  version: '1',
})
export class AccountsController {
  @Get()
  @ApiResponse({
    status: 422,
  })
  async getAll() {
    return 'Hello'
  }

  @Post(':id/cip')
  uploadCIPInformation() {}
}
