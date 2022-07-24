import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { CipDto, CreateAccountDto } from '../dto/accounts.dto'
import { AccountStatus } from '../interface/accounts.interface'

export interface GetAllAccountsOptions {
  query?: string
  created_after?: string
  created_before?: string
  status?: AccountStatus
  sort?: string
  entities?: string
}

@Injectable()
export class AccountsService {
  constructor(private httpService: HttpService) {}

  createAccount(createAccountDto: CreateAccountDto) {
    return this.httpService.post('/v1/accounts', createAccountDto)
  }

  getAccount(id: string) {
    return this.httpService.get(`/v1/accounts/${id}`)
  }

  getAllAccounts(options: GetAllAccountsOptions) {
    return this.httpService.get('/v1/accounts', { params: options })
  }

  getAccountCip(id: string) {
    return this.httpService.get(`/v1/accounts/${id}/cip`)
  }

  createAccountCip(id: string, CipDto: CipDto) {
    return this.httpService.post(`/v1/accounts/${id}/cip`, CipDto)
  }
}
