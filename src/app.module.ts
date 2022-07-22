import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { AccountsModule } from './accounts/accounts.module'
import { AlpacaModule } from './alpaca/alpaca.module'
import { AssetsModule } from './assets/assets.module'
import { AnnouncementsModule } from './announcements/announcements.module';
import typeOrmConfig from './typeorm.config'
import alpacaModuleConfig from './alpaca.config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig()),
    AlpacaModule.register(alpacaModuleConfig()),
    AccountsModule,
    AssetsModule,
    AnnouncementsModule,
  ],
  providers: [],
})
export class AppModule {}
