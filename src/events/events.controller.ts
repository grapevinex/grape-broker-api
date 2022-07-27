import { Controller, Get, Query, Request } from '@nestjs/common'
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AccountStatusDto } from './service/dto/account-status.dto'
import { EventsService } from './service/events.service'
import { JournalStatusDto } from './service/dto/journal-status.dto'
import { TransferStatusDto } from './service/dto/transfer-status.dto'
import { TradesStatusDto } from './service/dto/trades-status.dto'
import { NonTradingActivitiesStatusDto } from './service/dto/non-trading-activities.dto'

@ApiTags('Events')
@Controller({
  path: 'events',
  version: '1',
})
export class EventsController {
  constructor(private EventsService: EventsService) {}

  @ApiResponse({
    status: 200,
    type: AccountStatusDto,
    description:
      'You can listen to events related to change of account status, usually when sending in POST/accounts requests.',
  })
  @ApiQuery({
    name: 'since',
    type: String,
    required: false,
    example: '2022-08-01',
  })
  @ApiQuery({
    name: 'until',
    type: String,
    required: false,
    example: '2022-08-31',
  })
  @ApiQuery({
    name: 'since_id',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'until_id',
    type: Number,
    required: false,
  })
  @Get('account/status')
  getAccountsStatus(
    @Request() request: Request,
    @Query('since') since?: string,
    @Query('until') until?: string,
    @Query('since_id') since_id?: string,
    @Query('until_id') until_id?: string,
  ) {
    return this.EventsService.getAccountsStatus(
      {
        since,
        until,
        since_id,
        until_id,
      },
      request['baseURL'],
      request.headers['authorization'],
    )
  }

  @ApiResponse({
    status: 200,
    type: TradesStatusDto,
    description:
      'You can listen to events related to change of account status, usually when sending in POST/accounts requests.',
  })
  @ApiQuery({
    name: 'since',
    type: String,
    required: false,
    example: '2022-08-01',
  })
  @ApiQuery({
    name: 'until',
    type: String,
    required: false,
    example: '2022-08-31',
  })
  @ApiQuery({
    name: 'since_id',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'until_id',
    type: Number,
    required: false,
  })
  @Get('events/trades')
  getTradeUpdates(
    @Request() request: Request,
    @Query('since') since?: string,
    @Query('until') until?: string,
    @Query('since_id') since_id?: string,
    @Query('until_id') until_id?: string,
  ) {
    return this.EventsService.getEventTrades(
      {
        since,
        until,
        since_id,
        until_id,
      },
      request['baseURL'],
      request.headers['authorization'],
    )
  }

  @ApiResponse({
    status: 200,
    type: JournalStatusDto,
    description:
      'You can listen to events related to change of account status, usually when sending in POST/accounts requests.',
  })
  @ApiQuery({
    name: 'since',
    type: String,
    required: false,
    example: '2022-08-01',
  })
  @ApiQuery({
    name: 'until',
    type: String,
    required: false,
    example: '2022-08-31',
  })
  @ApiQuery({
    name: 'since_id',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'until_id',
    type: Number,
    required: false,
  })
  @Get('events/journals/status')
  getEventsJournalsStatus(
    @Request() request: Request,
    @Query('since') since?: string,
    @Query('until') until?: string,
    @Query('since_id') since_id?: string,
    @Query('until_id') until_id?: string,
  ) {
    return this.EventsService.getEventsJournalsStatus(
      {
        since,
        until,
        since_id,
        until_id,
      },
      request['baseURL'],
      request.headers['authorization'],
    )
  }

  @ApiResponse({
    status: 200,
    type: TransferStatusDto,
    description:
      'You can listen to events related to change of account status, usually when sending in POST/accounts requests.',
  })
  @ApiQuery({
    name: 'since',
    type: String,
    required: false,
    example: '2022-08-01',
  })
  @ApiQuery({
    name: 'until',
    type: String,
    required: false,
    example: '2022-08-31',
  })
  @ApiQuery({
    name: 'since_id',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'until_id',
    type: Number,
    required: false,
  })
  @Get('events/transfers/status')
  getEventsTransfersStatus(
    @Request() request: Request,
    @Query('since') since?: string,
    @Query('until') until?: string,
    @Query('since_id') since_id?: string,
    @Query('until_id') until_id?: string,
  ) {
    return this.EventsService.getEventsTransfersStatus(
      {
        since,
        until,
        since_id,
        until_id,
      },
      request['baseURL'],
      request.headers['authorization'],
    )
  }

  @ApiResponse({
    status: 200,
    type: NonTradingActivitiesStatusDto,
    description:
      'You can listen to events related to change of account status, usually when sending in POST/accounts requests.',
  })
  @ApiQuery({
    name: 'since',
    type: String,
    required: false,
    example: '2022-08-01',
  })
  @ApiQuery({
    name: 'until',
    type: String,
    required: false,
    example: '2022-08-31',
  })
  @ApiQuery({
    name: 'since_id',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'until_id',
    type: Number,
    required: false,
  })
  @Get('events/nta')
  getNTAEventsStatus(
    @Request() request: Request,
    @Query('since') since?: string,
    @Query('until') until?: string,
    @Query('since_id') since_id?: string,
    @Query('until_id') until_id?: string,
  ) {
    return this.EventsService.getNTAEventsStatus(
      {
        since,
        until,
        since_id,
        until_id,
      },
      request['baseURL'],
      request.headers['authorization'],
    )
  }
}
