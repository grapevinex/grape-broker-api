import { ApiProperty } from '@nestjs/swagger'

export enum AssetClass {
  us_equity = 'us_equity',
  crypto = 'crypto',
}

export class ContactDto {
  @ApiProperty({
    type: String,
  })
  email_address: string
  @ApiProperty({
    type: String,
  })
  phone_number: string
  @ApiProperty({
    type: String,
  })
  street_address: string
  unit?: string
  @ApiProperty({
    type: String,
  })
  city: string
  state?: string
  postal_code?: string
  @ApiProperty({
    type: String,
    example: 'USA',
  })
  country: string
}

export enum FundingSourceType {
  employment_income = 'employment_income',
  investments = 'investments',
  inheritance = 'inheritance',
  business_income = 'business_income',
  savings = 'savings',
  family = 'family',
}

export enum VisaType {
  B1 = 'B1',
  B2 = 'B2',
  DACA = 'DACA',
  E1 = 'E1',
  E2 = 'E2',
  E3 = 'E3',
  F1 = 'F1',
  G4 = 'G4',
  H1B = 'H1B',
  J1 = 'J1',
  L1 = 'L1',
  OTHER = 'OTHER',
  O1 = 'O1',
  TN1 = 'TN1',
}

export enum TaxIdType {
  USA_SSN = 'USA_SSN',
  ARG_AR_CUIT = 'ARG_AR_CUIT',
  AUS_TFN = 'AUS_TFN',
  AUS_ABN = 'AUS_ABN',
  BOL_NIT = 'BOL_NIT',
  BRA_CPF = 'BRA_CPF',
  CHL_RUT = 'CHL_RUT',
  COL_NIT = 'COL_NIT',
  CRI_NITE = 'CRI_NITE',
  DEU_TAX_ID = 'DEU_TAX_ID',
  DOM_RNC = 'DOM_RNC',
  ECU_RUC = 'ECU_RUC',
  FRA_SPI = 'FRA_SPI',
  GBR_UTR = 'GBR_UTR',
  GBR_NINO = 'GBR_NINO',
  GTM_NIT = 'GTM_NIT',
  HND_RTN = 'HND_RTN',
  HUN_TIN = 'HUN_TIN',
  IDN_KTP = 'IDN_KTP',
  IND_PAN = 'IND_PAN',
  ISR_TAX_ID = 'ISR_TAX_ID',
  ITA_TAX_ID = 'ITA_TAX_ID',
  JPN_TAX_ID = 'JPN_TAX_ID',
  MEX_RFC = 'MEX_RFC',
  NIC_RUC = 'NIC_RUC',
  NLD_TIN = 'NLD_TIN',
  PAN_RUC = 'PAN_RUC',
  PER_RUC = 'PER_RUC',
  PRY_RUC = 'PRY_RUC',
  SGP_NRIC = 'SGP_NRIC',
  SGP_FIN = 'SGP_FIN',
  SGP_ASGD = 'SGP_ASGD',
  SGP_ITR = 'SGP_ITR',
  SLV_NIT = 'SLV_NIT',
  SWE_TAX_ID = 'SWE_TAX_ID',
  URY_RUT = 'URY_RUT',
  VEN_RIF = 'VEN_RIF',
  NOT_SPECIFIED = 'NOT_SPECIFIED',
}

export class IdentityDto {
  @ApiProperty({
    type: String,
  })
  given_name: string

  @ApiProperty({
    type: String,
  })
  middle_name: string

  @ApiProperty({
    type: String,
  })
  family_name: string

  @ApiProperty({
    type: String,
  })
  date_of_birth: string

  @ApiProperty({
    type: String,
  })
  tax_id: string

  @ApiProperty({
    enum: TaxIdType,
  })
  tax_id_type: TaxIdType

  @ApiProperty({
    type: Boolean,
  })
  country_of_citizenship: string

  @ApiProperty({
    type: Boolean,
  })
  country_of_birth: string

  @ApiProperty({
    type: Boolean,
  })
  country_of_tax_residence: string

  @ApiProperty({
    enum: VisaType,
    required: false,
  })
  visa_type?: VisaType

  @ApiProperty({
    type: String,
    required: false,
  })
  visa_expiration_date?: string

  @ApiProperty({
    type: String,
    required: false,
  })
  date_of_departure_from_usa?: string

  @ApiProperty({
    type: Boolean,
    required: false,
  })
  permanent_resident?: boolean

  @ApiProperty({
    enum: FundingSourceType,
  })
  funding_source: FundingSourceType[]

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
    required: false,
  })
  annual_income_min?: string | number

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
    required: false,
  })
  annual_income_max?: string | number

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
    required: false,
  })
  liquid_net_worth_min?: string | number

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
    required: false,
  })
  liquid_net_worth_max?: string | number

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
    required: false,
  })
  total_net_worth_min?: string | number

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
  })
  total_net_worth_max?: string | number

  @ApiProperty({
    type: Object,
    description: 'Any additional information used for KYC purposes',
  })
  extra: object
}

export enum ContextType {
  CONTROLLED_FIRM = 'CONTROLLED_FIRM',
  AFFILIATE_FIRM = 'AFFILIATE_FIRM',
  IMMEDIATE_FAMILY_EXPOSED = 'IMMEDIATE_FAMILY_EXPOSED',
}

export class DisclosureContextDto {
  @ApiProperty({
    enum: ContextType,
  })
  context_type: ContextType

  @ApiProperty({
    type: String,
    description:
      'Required if context_type is AFFILIATE_FIRM or CONTROLLED_FIRM',
  })
  company_name?: string

  @ApiProperty({
    type: String,
    description:
      'Required if context_type is AFFILIATE_FIRM or CONTROLLED_FIRM',
  })
  company_street_address?: string

  @ApiProperty({
    type: String,
    description:
      'Required if context_type is AFFILIATE_FIRM or CONTROLLED_FIRM',
  })
  company_city?: string

  @ApiProperty({
    type: String,
    description: 'Required if company_country is USA',
  })
  company_state?: string

  @ApiProperty({
    type: String,
    description:
      'Required if context_type is AFFILIATE_FIRM or CONTROLLED_FIRM',
  })
  company_country?: string

  @ApiProperty({
    type: String,
    description:
      'Required if context_type is AFFILIATE_FIRM or CONTROLLED_FIRM',
  })
  company_compliance_email?: string

  @ApiProperty({
    type: String,
    description: 'Required if context_type is IMMEDIATE_FAMILY_EXPOSED',
  })
  given_name?: string

  @ApiProperty({
    type: String,
    description: 'Required if context_type is IMMEDIATE_FAMILY_EXPOSED',
  })
  family_name?: string
}

export enum EmploymentStatus {
  unemployed = 'unemployed',
  employed = 'employed',
  student = 'student',
  retired = 'retired',
}

export class DisclosuresDto {
  @ApiProperty({
    type: Boolean,
    description:
      'Whether user holds a controlling position in a publicly traded company, member of the board of directors or has policy making abilities in a publicly traded company.',
  })
  is_control_person: boolean

  @ApiProperty({
    type: Boolean,
  })
  is_affiliated_exchange_or_finra: boolean

  @ApiProperty({
    type: Boolean,
  })
  is_politically_exposed: boolean

  @ApiProperty({
    type: Boolean,
    description:
      'If user immediate family member (sibling, husband/wife, child, parent) is either politically exposed or holds a control position.',
  })
  immediate_family_exposed: boolean

  @ApiProperty({
    type: () => DisclosureContextDto,
  })
  context?: DisclosureContextDto

  @ApiProperty({
    enum: EmploymentStatus,
  })
  employment_status?: EmploymentStatus

  @ApiProperty({
    type: String,
  })
  employer_name?: string

  @ApiProperty({
    type: String,
  })
  employer_address?: string

  @ApiProperty({
    type: String,
  })
  employment_position?: string
}

export enum AgreementType {
  margin_agreement = 'margin_agreement',
  account_agreement = 'account_agreement',
  customer_agreement = 'customer_agreement',
  crypto_agreement = 'crypto_agreement',
}

export class AgreementDto {
  @ApiProperty({
    enum: AgreementType,
  })
  agreement: AgreementType

  @ApiProperty({
    type: String,
    format: 'timestamp',
  })
  signed_at: string

  @ApiProperty({
    type: String,
  })
  ip_address: string

  @ApiProperty({
    type: String,
    required: false,
  })
  revision?: string
}

export enum DocumentType {
  identity_verification = 'identity_verification',
  address_verification = 'address_verification',
  date_of_birth_verification = 'date_of_birth_verification',
  tax_id_verification = 'tax_id_verification',
  account_approval_letter = 'account_approval_letter',
  w8ben = 'w8ben',
}

export class DocumentDto {
  @ApiProperty({
    enum: DocumentType,
  })
  document_type: DocumentType

  @ApiProperty({
    type: String,
  })
  document_sub_type: string

  @ApiProperty({
    type: String,
  })
  content: string

  @ApiProperty({
    type: String,
  })
  mime_type: string
}

export class TrustedContactDto {
  @ApiProperty({
    type: String,
  })
  given_name: string

  @ApiProperty({
    type: String,
  })
  family_name: string
}

export class CreateAccountDto {
  @ApiProperty({
    enum: AssetClass,
    required: false,
  })
  enabled_assets?: AssetClass

  @ApiProperty({
    type: () => ContactDto,
  })
  contact: ContactDto

  @ApiProperty({
    type: () => IdentityDto,
  })
  identity: IdentityDto

  @ApiProperty({
    type: () => DisclosuresDto,
  })
  disclosures: DisclosuresDto

  @ApiProperty({
    type: () => AgreementDto,
  })
  agreements: AgreementDto[]

  @ApiProperty({
    type: () => DocumentDto,
    required: false,
  })
  documents?: DocumentDto[]

  @ApiProperty({
    type: () => TrustedContactDto,
    required: false,
  })
  trusted_contact?: TrustedContactDto
}
