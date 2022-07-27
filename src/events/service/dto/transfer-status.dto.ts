import { ApiProperty } from '@nestjs/swagger'

export enum TransferStatus {
  QUEUED = 'QUEUED',
  APPROVAL_PENDING = 'APPROVAL_PENDING',
  PENDING = 'PENDING',
  SENT_TO_CLEARING = 'SENT_TO_CLEARING',
  REJECTED = 'REJECTED',
  CANCELED = 'CANCELED',
  APPROVED = 'APPROVED',
  COMPLETE = 'COMPLETE',
  RETURNED = 'RETURNED',
}

export class TransferStatusDto {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Account UUID',
  })
  account_id: string

  @ApiProperty({
    type: String,
    description: 'Timedate of when the transfer status changed',
  })
  at: string

  @ApiProperty({
    type: Number,
    description: 'Monotonically increasing 64bit integer',
  })
  event_id: number

  @ApiProperty({
    enum: TransferStatus,
  })
  status_from: TransferStatus

  @ApiProperty({
    enum: TransferStatus,
  })
  status_to: TransferStatus

  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Transfer UUID',
  })
  transfer_id: string
}
