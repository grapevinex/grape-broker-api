import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { AccountsController } from './accounts.controller'
import { AccountsService } from './service/accounts.service'

@Module({
  imports: [HttpModule],
  providers: [AccountsService],
  controllers: [AccountsController],
})
export class AccountsModule {}
