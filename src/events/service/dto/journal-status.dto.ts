import { ApiProperty } from '@nestjs/swagger'

export class JournalStatusDto {
  @ApiProperty({
    type: String,
    description: 'Timestamp of event',
  })
  at: string

  @ApiProperty({
    type: String,
    description: 'JNLC or JNLS',
  })
  entry_type: string

  @ApiProperty({
    type: Number,
    description: 'Monotonically increasing 64bit integer',
  })
  event_id: number

  @ApiProperty({
    type: String,
    description: 'The UUID of the journal',
  })
  journal_id: string

  @ApiProperty({
    type: String,
  })
  status_from: string

  @ApiProperty({
    type: String,
  })
  status_to: string
}
