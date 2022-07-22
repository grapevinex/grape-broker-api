import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { AssetsController } from './assets.controller'
import { AssetsService } from './service/assets.service'

@Module({
  imports: [HttpModule],
  providers: [AssetsService],
  controllers: [AssetsController],
})
export class AssetsModule {}
