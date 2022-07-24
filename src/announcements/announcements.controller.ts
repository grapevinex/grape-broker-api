import { Controller, Get, Param, Query } from '@nestjs/common'

import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import {
  AnnouncementDto,
  CorporateActionType,
  DateType,
} from './dto/announcement.dto'
import { AnnouncementService } from './service/announcement.service'

@ApiTags('Announcements')
@Controller({
  path: 'broker/corporate_actions/announcements',
  version: '1',
})
export class AnnouncementsController {
  constructor(private AnnouncementsService: AnnouncementService) {}

  @Get()
  @ApiQuery({
    name: 'ca_types',
    enum: CorporateActionType,
    example: 'dividend,merger,spinoff,split',
    isArray: true,
    description: 'Comma-delimited list',
  })
  @ApiQuery({
    name: 'since',
    type: String,
    description:
      'The start (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.',
  })
  @ApiQuery({
    name: 'until',
    type: String,
    description:
      'The end (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.',
  })
  @ApiQuery({
    name: 'symbol',
    type: String,
    description: 'The symbol of the company initiating the announcement.',
    required: false,
  })
  @ApiQuery({
    name: 'cusip',
    type: String,
    description: 'The CUSIP of the company initiating the announcement.',
    required: false,
  })
  @ApiQuery({
    name: 'date_type',
    enum: DateType,
    required: false,
  })
  @ApiResponse({
    status: 200,
    type: [AnnouncementDto],
    description: 'Get corporate announcements',
  })
  async getAllAnnouncements(
    @Query('ca_types') ca_types: CorporateActionType[],
    @Query('since') since: string,
    @Query('until') until: string,
    @Query('symbol') symbol?: string,
    @Query('cusip') cusip?: string,
    @Query('date_type') date_type?: DateType,
  ) {
    return this.AnnouncementsService.getAllAnnouncements({
      ca_types,
      since,
      until,
      symbol,
      cusip,
      date_type,
    })
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
    format: 'uuid',
    description: 'Announcement identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns corporate announcements by id',
    type: AnnouncementDto,
  })
  getAnnouncement(@Param('id') id: string) {
    return this.AnnouncementsService.getAnnouncement(id)
  }
}
