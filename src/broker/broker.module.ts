import { Module } from '@nestjs/common'
import { AccountsModule } from './accounts/accounts.module'
import { AccountModule } from './account/account.module'

@Module({
  imports: [AccountsModule, AccountModule],
})
export class BrokerModule {}
