import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { AccountsModule } from './accounts/accounts.module'
import { AssetsModule } from './assets/assets.module'
import { AnnouncementsModule } from './announcements/announcements.module'
import { ClockModule } from './clock/clock.module'
import typeOrmConfig from './typeorm.config'
import { AlpacaMiddleware } from './common/middleware/alpaca.middleware'
import { EventsModule } from './events/events.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig()),
    AccountsModule,
    AssetsModule,
    AnnouncementsModule,
    ClockModule,
    EventsModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AlpacaMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
