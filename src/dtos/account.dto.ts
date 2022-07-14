import { ApiProperty } from '@nestjs/swagger';

export enum AccountStatus {
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

export class AccountDto {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'UUID that identifies the account for later reference'
  })
  id: string

  @ApiProperty({
    type: String,
    description: 'A human-readable account number'
  })
  account_number: string

  @ApiProperty({
    enum: AccountStatus,
    example: AccountStatus.SUBMITTED
  })
  status: AccountStatus

  @ApiProperty({
    enum: CryptoStatus,
    example: CryptoStatus.INACTIVE
  })
  crypto_status: CryptoStatus

  @ApiProperty({
    type: String,
    example: 'USD'
  })
  currency: string

  @ApiProperty({
    type: String,
    description: 'EOD equity calculation (cash + long market value + short market value)'
  })
  last_equity: string

  @ApiProperty({
    type: String,
    format: 'date-time',
    example: '2022-07-14T17:25:21.145057Z'
  })
  created_at: string
}
