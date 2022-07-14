import { HttpException, Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { catchError, map } from 'rxjs'
import { CreateAccountDto } from '../../dtos/create-account.dto'

@Injectable()
export class AlpacaService {
  constructor(private httpService: HttpService) {
  }

  createAccount(createAccountDto: CreateAccountDto) {
    return this.httpService.post('/v1/accounts', createAccountDto)
      .pipe(
        map(res => res.data),
        catchError(({ response }) => {
          throw new HttpException(
            response.data.message ?? response.statusText,
            response.status
          )
        })
      )
  }
}
