import { AlpacaModuleOptions } from './alpaca/alpaca.module'

const alpacaConfig = (): AlpacaModuleOptions => ({
  baseURL: process.env.ALPACA_HOST,
  keyId: process.env.ALPACA_API_KEY,
  secretKey: process.env.ALPACA_API_SECRET,
})

export default alpacaConfig
