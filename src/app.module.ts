import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { AccountsModule } from './accounts/accounts.module'
import { AlpacaModule } from './alpaca/alpaca.module'
import { AssetsModule } from './assets/assets.module'
import { ClockModule } from './clock/clock.module'

import typeOrmConfig from './typeorm.config'
import alpacaModuleConfig from './alpaca.config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig()),
    AlpacaModule.register(alpacaModuleConfig()),
    AccountsModule,
    AssetsModule,
    ClockModule,

  ],
  providers: [],
})
export class AppModule {}
