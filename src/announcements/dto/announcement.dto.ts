import { ApiProperty } from '@nestjs/swagger';

export enum DateType {
  declaration_date = 'declaration_date',
  ex_date = 'ex_date',
  record_date = 'record_date',
  payable_date = 'payable_date'
}

export enum CorporateActionType {
  dividend = 'dividend',
  merger = 'merger',
  spinoff = 'spinoff',
  split = 'split',
}

export enum CorporateActionSubtype {
  cash = 'cash',
  stock = 'stock',
  merger_update = 'merger_update',
  merger_completion = 'merger_completion',
  spinoff = 'spinoff',
  stock_split = 'stock_split',
  unit_split = 'unit_split',
  reverse_split = 'reverse_split',
  recapitalization = 'recapitalization'
}

export class AnnouncementDto {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'ID that is specific to a single announcement.',
  })
  id: string

  @ApiProperty({
    type: String,
    description: 'ID that remains consistent across all announcements for the same corporate action. Unlike ‘id’, this can be used to connect multiple announcements to see how the terms have changed throughout the lifecycle of the corporate action event.'
  })
  corporate_action_id: string

  @ApiProperty({
    enum: CorporateActionType,
  })
  ca_type: CorporateActionType

  @ApiProperty({
    enum: CorporateActionSubtype
  })
  ca_sub_type: CorporateActionSubtype

  @ApiProperty({
    type: String,
    description: 'Symbol of the company initiating the announcement.'
  })
  initiating_symbol: string

  @ApiProperty({
    type: String,
    description: 'CUSIP of the company initiating the announcement.'
  })
  initiating_original_cusip: string

  @ApiProperty({
    type: String,
    description: 'Symbol of the child company involved in the announcement.',
    required: false
  })
  target_symbol: string

  @ApiProperty({
    type: String,
    description: 'CUSIP of the child company involved in the announcement.',
    required: false
  })
  target_original_cusip: string

  @ApiProperty({
    type: String,
    description: 'Date the corporate action or subsequent terms update was announced.',
    required: false
  })
  declaration_date: string

  @ApiProperty({
    type: String,
    description: 'The first date that purchasing a security will not result in a corporate action entitlement.',
    required: false
  })
  ex_date: string

  @ApiProperty({
    type: String,
    description: 'The date an account must hold a settled position in the security in order to receive the corporate action entitlement.',
    required: false
  })
  record_date: string

  @ApiProperty({
    type: String,
    description: 'The date the announcement will take effect. On this date, account stock and cash balances are expected to be processed accordingly.',
    required: false
  })
  payable_date: string

  @ApiProperty({
    type: String,
    format: 'decimal',
    description: 'The amount of cash to be paid per share held by an account on the record date.',
    required: false
  })
  cash: string

  @ApiProperty({
    type: String,
    format: 'decimal',
    description: 'The denominator to determine any quantity change ratios in positions.',
    required: false
  })
  old_rate: string

  @ApiProperty({
    type: String,
    format: 'decimal',
    description: 'The numerator to determine any quantity change ratios in positions.',
    required: false
  })
  new_rate: string
}
