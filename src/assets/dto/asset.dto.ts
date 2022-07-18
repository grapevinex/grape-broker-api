import { ApiProperty } from '@nestjs/swagger'

export enum EquityClass {
  us_equity = 'us_equity',
  crypto = 'crypto',
}

export enum AssetStatus {
  active = 'active',
  inactive = 'inactive',
}

export class AssetDto {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Asset ID',
  })
  id: string

  @ApiProperty({
    enum: EquityClass,
  })
  class: string

  @ApiProperty({
    type: String,
    examples: ['AMEX', 'ARCA', 'BATS', 'NYSE', 'NASDAQ', 'NYSEARCA', 'OTC'],
  })
  exchange: string

  @ApiProperty({
    type: String,
    description: 'The symbol of the asset',
  })
  symbol: string

  @ApiProperty({
    type: String,
    description: 'The official name of the asset',
  })
  name: string

  @ApiProperty({
    enum: AssetStatus,
  })
  status: string

  @ApiProperty({
    type: Boolean,
    description: 'Asset is tradable or not',
  })
  tradable: boolean

  @ApiProperty({
    type: Boolean,
    description: 'Asset is marginable or not',
  })
  marginable: boolean

  @ApiProperty({
    type: Boolean,
    description: 'Asset is shortable or not',
  })
  shortable: boolean

  @ApiProperty({
    type: Boolean,
    description:
      'Asset is easy-to-borrow or not (filtering for easy_to_borrow = True is the best way to check whether the name is currently available to short).',
  })
  easy_to_borrow: boolean

  @ApiProperty({
    type: Boolean,
    description: 'Asset is fractionable or not',
  })
  fractionable: boolean

  @ApiProperty({
    type: String,
    required: false,
    description: 'Minimum order size. Field available for crypto only.',
  })
  min_order_size?: string

  @ApiProperty({
    type: String,
    description:
      'Amount a trade quantity can be incremented by. Field available for crypto only.',
    required: false,
  })
  min_trade_increment?: string

  @ApiProperty({
    type: String,
    required: false,
    description:
      'Amount the price can be incremented by. Field available for crypto only.',
  })
  price_increment?: string
}
