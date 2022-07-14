import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Accounts CIP')
@Controller({
  path: 'accounts',
  version: '1',
})
export class AccountsController {
  @Get(':id/cip')
  getCIPInformation() {}
}
