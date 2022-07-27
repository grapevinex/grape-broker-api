import { ApiProperty } from '@nestjs/swagger';

export class NonTradingActivitiesStatusDto {
  @ApiProperty({
    type: String,
    format: 'uuid'
  })
  account_id: string

  @ApiProperty({
    type: String,
    description: 'Timestamp of event'
  })
  at: string

  @ApiProperty({
    type: String
  })
  description: string

  @ApiProperty({
    type: String
  })
  entry_type: string

  @ApiProperty({
    type: Number
  })
  event_id: number

  @ApiProperty({
    type: String
  })
  id: string

  @ApiProperty({
    type: Number
  })
  net_amount: number

  @ApiProperty({
    type: Number
  })
  per_share_amount: number

  @ApiProperty({
    type: String
  })
  price: string

  @ApiProperty({
    type: Number
  })
  qty: number

  @ApiProperty({
    type: String
  })
  settle_date: string

  @ApiProperty({
    type: String
  })
  status: string

  @ApiProperty({
    type: String
  })
  symbol: string

  @ApiProperty({
    type: String
  })
  system_date: string
}

