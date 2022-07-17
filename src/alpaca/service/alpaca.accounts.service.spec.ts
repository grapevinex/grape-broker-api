import { Test, TestingModule } from '@nestjs/testing'
import { AlpacaAccountsService } from './alpaca.accounts.service'

describe('AlpacaAccountsService', () => {
  let service: AlpacaAccountsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlpacaAccountsService],
    }).compile()

    service = module.get<AlpacaAccountsService>(AlpacaAccountsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
