import { Module } from '@nestjs/common'
import { AssetsController } from './assets.controller'
import { APP_FILTER } from '@nestjs/core'
import { HttpExceptionFilter } from '../common/filters/http-expeption.filter'

@Module({
  controllers: [AssetsController],
  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AssetsModule {}
