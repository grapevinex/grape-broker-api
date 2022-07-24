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
    req.headers.authorization = `Basic ${this.generateAuthorizationToken(alpacaModuleConfig())}`
    req.headers['Content-Type'] = 'application/json';
    req.baseURL = alpacaModuleConfig().baseURL
    next()
  }
}
