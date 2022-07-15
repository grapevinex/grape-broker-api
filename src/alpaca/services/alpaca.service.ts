import { HttpException, Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { catchError, map, Observable } from 'rxjs'
import { CreateAccountDto } from '../../dtos/create-account.dto'
import { AccountDto, AccountStatus } from '../../dtos/account.dto'
import { SubmitCIPDto } from '../../dtos/submit-cip.dto'

export interface GetAllAccountsOptions {
  query?: string
  created_after?: string
  created_before?: string
  status?: AccountStatus
  sort?: string
  entities?: string
}

@Injectable()
export class AlpacaService {
  constructor(private httpService: HttpService) {}

  createAccount(createAccountDto: CreateAccountDto): Observable<AccountDto> {
    return this.httpService.post('/v1/accounts', createAccountDto).pipe(
      map((res) => res.data),
      catchError(this.errorHandler),
    )
  }

  getAccount(id: string): Observable<AccountDto> {
    return this.httpService.get(`/v1/accounts/${id}`).pipe(
      map((res) => res.data),
      catchError(this.errorHandler),
    )
  }

  getAllAccounts(options: GetAllAccountsOptions): Observable<AccountDto[]> {
    return this.httpService.get('/v1/accounts', { params: options }).pipe(
      map((res) => res.data),
      catchError(this.errorHandler),
    )
  }

  getAccountCIP(id: string) {
    return this.httpService.get(`/v1/accounts/${id}/cip`).pipe(
      map((res) => res.data),
      catchError(this.errorHandler),
    )
  }

  uploadCIPInformation(id: string, submitCIPDto: SubmitCIPDto) {
    return this.httpService.post(`/v1/accounts/${id}/cip`, submitCIPDto).pipe(
      map((res) => res.data),
      catchError(this.errorHandler),
    )
  }

  private errorHandler({ response }): Observable<any> {
    throw new HttpException(
      response.data.message ?? response.statusText,
      response.status,
    )
  }
}
