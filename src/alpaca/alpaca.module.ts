import { DynamicModule, Global, Module } from '@nestjs/common'
import { HttpModuleOptions } from '@nestjs/axios/dist/interfaces'
import { HttpModule } from '@nestjs/axios'
import { AlpacaAccountsService } from './service/alpaca.accounts.service'
import { AlpacaAssetsService } from './service/alpaca.assets.service'
import { AlpacaAnnouncementService } from './service/alpaca.announcement.service';

export interface AlpacaModuleOptions extends HttpModuleOptions {
  keyId: string
  secretKey: string
}

@Global()
@Module({})
export class AlpacaModule {
  private static generateAuthorizationToken(
    options: AlpacaModuleOptions,
  ): string {
    return Buffer.from(`${options.keyId}:${options.secretKey}`).toString(
      'base64',
    )
  }

  static register(options: AlpacaModuleOptions): DynamicModule {
    if (!options.keyId || !options.secretKey) {
      throw new Error('KeyId and SecretKey are required!')
    }
    const authorization = AlpacaModule.generateAuthorizationToken(options)

    return {
      module: AlpacaModule,
      imports: [
        HttpModule.register({
          ...options,
          headers: {
            Authorization: `Basic ${authorization}`,
            'Content-Type': 'application/json',
          },
        }),
      ],
      providers: [AlpacaAccountsService, AlpacaAssetsService, AlpacaAnnouncementService],
      exports: [AlpacaAccountsService, AlpacaAssetsService, AlpacaAnnouncementService],
    }
  }
}
