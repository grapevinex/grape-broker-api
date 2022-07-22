import {
  Controller,
  Get,
  Param,
  Query,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common'
import { HttpExceptionFilter } from '../common/filters/http-expeption.filter'
import { HttpResponseInterceptor } from '../common/interceptors/http-response.interceptor'
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import {
  AnnouncementDto,
  CorporateActionType,
  DateType,
} from './dto/announcement.dto'
import { AlpacaAnnouncementService } from '../alpaca/service/alpaca.announcement.service'

@ApiTags('Announcements')
@Controller({
  path: 'corporate_actions/announcements',
  version: '1',
})
@UseFilters(HttpExceptionFilter)
@UseInterceptors(HttpResponseInterceptor)
export class AnnouncementsController {
  constructor(private alpacaAnnouncementsService: AlpacaAnnouncementService) {}

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
    return this.alpacaAnnouncementsService.getAllAnnouncements({
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
    return this.alpacaAnnouncementsService.getAnnouncement(id)
  }
}
