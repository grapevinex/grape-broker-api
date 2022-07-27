import { ApiProperty } from '@nestjs/swagger';

export enum CryptoStatus {
  INACTIVE = 'INACTIVE',
  ONBOARDING = 'ONBOARDING',
  SUBMITTED = 'SUBMITTED',
  ACTION_REQUIRED = 'ACTION_REQUIRED',
  EDITED = 'EDITED',
  APPROVAL_PENDING = 'APPROVAL_PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ACTIVE = 'ACTIVE',
  SUBMISSION_FAILED = 'SUBMISSION_FAILED',
  DISABLED = 'DISABLED',
  ACCOUNT_CLOSED = 'ACCOUNT_CLOSED'
}

export enum KYCResults {
  ACCEPT = 'ACCEPT',
  INDETERMINATE = 'INDETERMINATE',
  REJECT = 'REJECT',
  additional_information = 'additional_information',
  summary = 'summary'
}

export class AccountStatusDto {
  @ApiProperty({
    type: String,
    format: 'uuid'
  })
  account_id: string

  @ApiProperty({
    type: String,
    format: 'uuid'
  })
  account_number: string

  @ApiProperty({
    type: String,
    description: 'Timestamp of event'
  })
  at: string

  @ApiProperty({
    enum: CryptoStatus,
  })
  crypto_status_from: CryptoStatus

  @ApiProperty({
    enum: CryptoStatus,
  })
  crypto_status_to: string

  @ApiProperty({
    type: Number,
    description: 'Monotonically increasing 64bit integer'
  })
  event_id: number

  @ApiProperty({
    enum: KYCResults,
    nullable: true,
    description: 'Results of KYC if applicable.'
  })
  kyc_results: KYCResults

  @ApiProperty({
    type: String,
  })
  status_from: string

  @ApiProperty({
    type: String,
  })
  status_to: string
}
