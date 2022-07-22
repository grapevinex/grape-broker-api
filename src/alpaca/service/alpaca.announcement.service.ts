import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import {
  CorporateActionType,
  DateType,
} from '../../announcements/dto/announcement.dto'

export interface GetAllAnnouncementsParams {
  ca_types: CorporateActionType[]
  since: string
  until: string
  symbol?: string
  cusip: string
  date_type: DateType
}

@Injectable()
export class AlpacaAnnouncementService {
  constructor(private httpService: HttpService) {}

  getAllAnnouncements(params: GetAllAnnouncementsParams) {
    return this.httpService.get('/v1/corporate_actions/announcements', {
      params: {
        ...params,
        ca_types: params.ca_types.join(','),
      },
    })
  }

  getAnnouncement(id: string) {
    return this.httpService.get(`/v1/corporate_actions/announcements/${id}`)
  }
}
