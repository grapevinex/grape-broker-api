import { HttpException, Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { catchError, map, Observable } from 'rxjs'
import {
  AccountDto,
  CreateAccountDto,
  CipDto,
} from '../../accounts/dto/accounts.dto'
import { AccountStatus } from '../../accounts/interface/accounts.interface'
import { AssetDto } from '../../assets/dto/asset.dto'

export interface GetAllAccountsOptions {
  query?: string
  created_after?: string
  created_before?: string
  status?: AccountStatus
  sort?: string
  entities?: string
}

export interface GetAssetsOptions {
  assetClass: string
  status: string
}

@Injectable()
export class AlpacaAccountsService {
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

  getAccountCip(id: string) {
    return this.httpService.get(`/v1/accounts/${id}/cip`).pipe(
      map((res) => res.data),
      catchError(this.errorHandler),
    )
  }

  createAccountCip(id: string, CipDto: CipDto) {
    return this.httpService.post(`/v1/accounts/${id}/cip`, CipDto).pipe(
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

  getAssets(params: GetAssetsOptions): Observable<AssetDto[]> {
    return this.httpService.get('/v1/assets', { params }).pipe(
      map((res) => res.data),
      catchError(this.errorHandler),
    )
  }

  getAsset(assetId: string): Observable<AssetDto> {
    return this.httpService.get(`/v1/assets/${assetId}`).pipe(
      map((res) => res.data),
      catchError(this.errorHandler),
    )
  }
}
