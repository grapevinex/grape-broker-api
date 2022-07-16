import { Module } from '@nestjs/common'
import { BrokerAccountsController } from './broker-accounts.controller'
import { AccountsController } from './accounts.controller'

@Module({
  imports: [],
  controllers: [BrokerAccountsController, AccountsController],
})
export class BrokerModule {}
