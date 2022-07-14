import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { BrokerModule } from './broker/broker.module'
import { AccountsModule } from './accounts/accounts.module'
import { AlpacaModule } from './alpaca/alpaca.module'
import typeOrmConfig from './typeorm.config'
import alpacaModuleConfig from './alpaca.config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig()),
    BrokerModule,
    AccountsModule,
    AlpacaModule.register(alpacaModuleConfig()),
  ],
  providers: [],
})
export class AppModule {}
