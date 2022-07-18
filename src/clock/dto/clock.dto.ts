import { ApiProperty } from '@nestjs/swagger';

export class ClockDto {
  @ApiProperty({
    type: String,
    format: 'timestamp',
    description: 'Current timestamp'
  })
  timestamp: string

  @ApiProperty({
    type: Boolean,
    description: 'Whether the market is open or not'
  })
  is_open: boolean

  @ApiProperty({
    type: String,
    format: 'timestamp',
    description: 'Next market open timestamp'
  })
  next_open: string

  @ApiProperty({
    type: String,
    format: 'timestamp',
    description: 'Next market close timestamp'
  })
  next_close: string
}
