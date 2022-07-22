import alpacaModuleConfig from '../../alpaca.config'
import { NestMiddleware, Injectable } from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class AlpacaMiddleware implements NestMiddleware {
  private generateAuthorizationToken(options): string {
    return Buffer.from(`${options.keyId}:${options.secretKey}`).toString(
      'base64',
    )
  }

  async use(req: Request | any, res: Response, next: () => void) {
    req.headers.authorization = this.generateAuthorizationToken(
      alpacaModuleConfig(),
    )
    req.baseURL = alpacaModuleConfig().baseURL
    next()
  }
}
