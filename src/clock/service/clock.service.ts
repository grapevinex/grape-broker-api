import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class ClockService {
  constructor(private httpService: HttpService) {}

  clock() {
    return this.httpService.get('/v1/clock')
  }
}
