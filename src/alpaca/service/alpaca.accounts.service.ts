import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { Observable } from 'rxjs'
import {
  AccountDto,
  CipDto,
  CreateAccountDto,
} from '../../accounts/dto/accounts.dto'
import { AccountStatus } from '../../accounts/interface/accounts.interface'
import { AxiosResponse } from 'axios'

export interface GetAllAccountsOptions {
  query?: string
  created_after?: string
  created_before?: string
  status?: AccountStatus
  sort?: string
  entities?: string
}

@Injectable()
export class AlpacaAccountsService {
  constructor(private httpService: HttpService) {}

  createAccount(
    createAccountDto: CreateAccountDto,
  ): Observable<AxiosResponse<AccountDto>> {
    return this.httpService.post('/v1/accounts', createAccountDto)
  }

  getAccount(id: string): Observable<AxiosResponse<AccountDto>> {
    return this.httpService.get(`/v1/accounts/${id}`)
  }

  getAllAccounts(
    options: GetAllAccountsOptions,
  ): Observable<AxiosResponse<AccountDto[]>> {
    return this.httpService.get('/v1/accounts', { params: options })
  }

  getAccountCip(id: string) {
    return this.httpService.get(`/v1/accounts/${id}/cip`)
  }

  createAccountCip(id: string, CipDto: CipDto) {
    return this.httpService.post(`/v1/accounts/${id}/cip`, CipDto)
  }

  clock() {
    return this.httpService.get('/v1/clock').pipe(
      map((res) => res.data),
      catchError(this.errorHandler),
    )
  }
}
