import { HttpModuleOptions } from '@nestjs/axios'

export interface AlpacaConfig extends HttpModuleOptions {
  keyId: string
  secretKey: string
}

const alpacaConfig = (): AlpacaConfig => ({
  baseURL: process.env.ALPACA_HOST,
  keyId: process.env.ALPACA_API_KEY,
  secretKey: process.env.ALPACA_API_SECRET,
})

export default alpacaConfig
