import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import alpacaModuleConfig from '../../alpaca.config'

export interface AccountStatusProperties {
  until: string
  since_id: string
  since: string
  until_id: string
}

@Injectable()
export class EventsService {
  constructor(private httpService: HttpService) {}

  getAccountsStatus(
    param: AccountStatusProperties,
    baseUrl: string,
    authorization: string,
  ) {
    return this.httpService.get(baseUrl + '/v1/events/trades', {
      headers: {
        authorization,
      },
    })
  }

  getEventTrades(
    param: AccountStatusProperties,
    baseUrl: string,
    authorization: string,
  ) {
    return this.httpService.get(baseUrl + '/v1/events/trades', {
      headers: {
        authorization,
      },
    })
  }

  getEventsJournalsStatus(
    param: AccountStatusProperties,
    baseUrl: string,
    authorization: string,
  ) {
    return this.httpService.get(baseUrl + '/v1/events/journals/status', {
      headers: {
        authorization,
      },
    })
  }

  getEventsTransfersStatus(
    param: AccountStatusProperties,
    baseUrl: string,
    authorization: string,
  ) {
    return this.httpService.get(baseUrl + '/v1/events/transfers/status', {
      headers: {
        authorization,
      },
    })
  }

  getNTAEventsStatus(
    param: AccountStatusProperties,
    baseUrl: string,
    authorization: string,
  ) {
    return this.httpService.get(baseUrl + '/v1/events/nta', {
      headers: {
        authorization,
      },
    })
  }
}
