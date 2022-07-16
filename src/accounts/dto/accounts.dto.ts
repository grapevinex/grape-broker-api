import { ApiProperty } from '@nestjs/swagger'
import {
  AccountStatus,
  CryptoStatus,
  CipApprovalStatus,
  CipResult,
  CipStatus,
  TaxIdType,
  VisaType,
  FundingSourceType,
  EmploymentStatus,
  AgreementType,
  EnabledAssets,
  DisclosureContextType,
} from '../interface/accounts.interface'

export class Kyc {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check',
  })
  id: string

  @ApiProperty({
    type: Number,
    description: 'Overall risk score returned by KYC provider or assessed',
    required: false,
  })
  risk_score?: number

  @ApiProperty({
    type: String,
    description: 'Overall risk level returned by KYC provider or assessed',
  })
  risk_level: string

  @ApiProperty({
    type: String,
    description:
      'The list of risk categories returned by the KYC provider or assessed',
    required: false,
  })
  risk_categories?: string

  @ApiProperty({
    type: String,
    description: 'Given and family name of applicant',
  })
  applicant_name: string

  @ApiProperty({
    type: String,
  })
  email_address: string

  @ApiProperty({
    type: String,
  })
  nationality: string

  @ApiProperty({
    type: String,
    description: 'Government issued ID number of applicant',
  })
  id_number: string

  @ApiProperty({
    type: String,
    format: 'date',
  })
  date_of_birth: string

  @ApiProperty({
    type: String,
    description:
      'Concatenated street address, city, state and country of applicant',
  })
  address: string

  @ApiProperty({
    type: String,
  })
  postal_code: string

  @ApiProperty({
    type: String,
  })
  country_of_residency: string

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  kyc_completed_at: string

  @ApiProperty({
    type: String,
  })
  ip_address: string

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  check_initiated_at: string

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  check_completed_at: string

  @ApiProperty({
    enum: CipApprovalStatus,
  })
  approval_status: CipApprovalStatus

  @ApiProperty({
    type: String,
  })
  approved_by: string

  @ApiProperty({
    type: String,
    required: false,
  })
  approved_reason?: string

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  approved_at: string
}

export class CipDocument {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check',
  })
  id: string

  @ApiProperty({
    enum: CipResult,
    description: 'Overall result of specific check',
  })
  result: CipResult

  @ApiProperty({
    enum: CipResult,
    description: 'Overall status of specific check',
  })
  status: CipStatus

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  created_at: string

  @ApiProperty({
    type: String,
    format: 'date-time',
    required: false,
  })
  date_of_birth: string

  @ApiProperty({
    type: String,
    format: 'date-time',
    required: false,
  })
  date_of_expiry?: string

  @ApiProperty({
    type: Number,
    required: false,
    description: 'Number of the document that was checked',
  })
  document_numbers?: number

  @ApiProperty({
    type: String,
    required: false,
    description: 'Type of the document that was checked',
  })
  document_type?: string

  @ApiProperty({
    type: String,
    required: false,
    description: 'First name extracted from the document',
  })
  first_name?: string

  @ApiProperty({
    type: String,
    required: false,
    description: 'Last name extracted from the document',
  })
  last_name?: string

  @ApiProperty({
    type: String,
    required: false,
  })
  gender?: string

  @ApiProperty({
    type: String,
    required: false,
  })
  issuing_country?: string

  @ApiProperty({
    type: String,
    required: false,
  })
  nationality?: string

  @ApiProperty({
    enum: () => CipResult,
    required: false,
    description:
      'Checks whether the age calculated from the document’s date of birth data point is greater than or equal to the minimum accepted age set at account level',
  })
  age_validation?: CipResult

  @ApiProperty({
    enum: () => CipResult,
    required: false,
    description:
      'Checks whether the image of the document has been found in our internal database of compromised documents',
  })
  compromised_document?: CipResult

  @ApiProperty({
    enum: () => CipStatus,
    required: false,
    description:
      'Checks whether the document has been identified as lost, stolen or otherwise compromised',
  })
  police_record?: CipStatus

  @ApiProperty({
    enum: () => CipResult,
    required: false,
    description:
      'Checks whether data on the document is consistent with data provided when creating an applicant through the API',
  })
  data_comparison?: CipResult

  @ApiProperty({
    type: Object,
    required: false,
    description:
      'For example: {"date_of_birth": "clear", "date_of_expiry": "clear” "document_numbers”: "clear”, "document_type”: "clear”, "first_name”: "clear”, "gender”: "clear”, "issuing_country”: "clear”, "last_name”: "clear”}',
  })
  data_comparison_breakdown?: Record<string, unknown>

  @ApiProperty({
    enum: () => CipResult,
    required: false,
    description:
      'Checks whether the document was of sufficient quality to verify',
  })
  image_integrity: CipResult

  @ApiProperty({
    type: Object,
    required: false,
    description:
      'For example: {"colour_picture”: "clear”, "conclusive_document_quality”: "clear”, "image_quality”: "clear”, "supported_document”: "clear”}',
  })
  image_integrity_breakdown?: Record<string, unknown>

  @ApiProperty({
    type: Object,
    required: false,
    description:
      'Checks whether visual (non-textual) elements are correct given the document type. Example: {"digital_tampering”: "clear”, "face_detection”: "clear”, "fonts”: "clear”, "original_document_present”: "clear”, "picture_face_integrity”: "clear”, "security_features”: "clear”, "template”: "clear”}\n',
  })
  visual_authenticity?: Record<string, unknown>
}

export class CipPhoto {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check',
  })
  id: string

  @ApiProperty({
    enum: CipResult,
    description: 'Overall result of specific check',
  })
  result: CipResult

  @ApiProperty({
    enum: CipResult,
    description: 'Overall status of specific check',
  })
  status: CipStatus

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  created_at: string

  @ApiProperty({
    enum: CipResult,
    description:
      'Checks whether the face in the document matches the face in the live photo',
  })
  face_comparison: CipResult

  @ApiProperty({
    type: Object,
    description:
      '{"face_match”:{"result”: "clear”,"properties”:{"score”: "80”}}}',
    required: false,
  })
  face_comparison_breakdown: Record<string, unknown>

  @ApiProperty({
    enum: () => CipResult,
    required: false,
    description:
      'Checks whether the quality and integrity of the uploaded files were sufficient to perform a face comparison',
  })
  image_integrity: CipResult

  @ApiProperty({
    type: Object,
    required: false,
    description:
      'For example: {"face_detected”:{"result”: "clear”},"source_integrity”: {"result”: "clear”}}',
  })
  image_integrity_breakdown?: Record<string, unknown>

  @ApiProperty({
    type: Object,
    required: false,
    description:
      'Checks whether the person in the live photo is real (not a spoof)\n',
  })
  visual_authenticity?: Record<string, unknown>
}

export class CipIdentity {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check',
  })
  id: string

  @ApiProperty({
    enum: CipResult,
    description: 'Overall result of specific check',
  })
  result: CipResult

  @ApiProperty({
    enum: CipResult,
    description: 'Overall status of specific check',
  })
  status: CipStatus

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  created_at: string

  @ApiProperty({
    enum: CipResult,
    description: 'Represents the matched address for the applicant',
    required: false,
  })
  matched_address?: CipResult

  @ApiProperty({
    type: Object,
    description:
      'For example: [{"id”: "19099121”,"match_types”:["credit_agencies”,"voting_register”]}]',
    required: false,
  })
  matched_addresses?: Record<string, unknown>

  @ApiProperty({
    enum: CipResult,
    description:
      'Shows the total number of sources found for applicant’s identity',
    required: false,
  })
  sources: CipResult

  @ApiProperty({
    type: Object,
    description:
      'For example: {"total_sources”: {"result”: "clear”,"properties”: {"total_number_of_sources”: "3”}}}\n',
    required: false,
  })
  sources_breakdown?: Record<string, unknown>

  @ApiProperty({
    enum: CipResult,
    description: 'Result if it was cleared against a data source',
  })
  address: CipResult

  @ApiProperty({
    type: Object,
    description:
      'For example: {"credit_agencies”: {"result”: "clear”,"properties”:{"number_of_matches”:"1”}}',
    required: false,
  })
  address_breakdown?: Record<string, unknown>

  @ApiProperty({
    enum: CipResult,
    description: 'Result if it was cleared against a data source',
  })
  date_of_birth: CipResult

  @ApiProperty({
    type: Object,
    description:
      'For example: {"credit_agencies”:{"result”: "clear”,"properties”: {"number_of_matches”: "1”}}\n',
    required: false,
  })
  date_of_birth_breakdown?: Record<string, unknown>
}

export class CipWatchlist {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check',
  })
  id: string

  @ApiProperty({
    enum: CipResult,
    description: 'Overall result of specific check',
  })
  result: CipResult

  @ApiProperty({
    enum: CipResult,
    description: 'Overall status of specific check',
  })
  status: CipStatus

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  created_at: string

  @ApiProperty({
    type: Object,
    example: '[{"text”: "Record info”}]',
    required: false,
  })
  records: Record<string, unknown>

  @ApiProperty({
    enum: CipResult,
    required: false,
  })
  politically_exposed_person: CipStatus

  @ApiProperty({
    enum: CipResult,
    required: false,
  })
  sanction: CipStatus

  @ApiProperty({
    enum: CipResult,
    required: false,
  })
  adverse_media: CipStatus

  @ApiProperty({
    enum: CipResult,
    required: false,
  })
  monitored_lists: CipStatus
}

export class Contact {
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

export class Identity {
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

export class DisclosureContext {
  @ApiProperty({
    enum: DisclosureContextType,
  })
  context_type: DisclosureContextType

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

export class Disclosures {
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
    type: () => DisclosureContext,
  })
  context?: DisclosureContext

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

export class Agreement {
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

export class Document {
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

export class TrustedContact {
  @ApiProperty({
    type: String,
  })
  given_name: string

  @ApiProperty({
    type: String,
  })
  family_name: string
}

export class AccountDto {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'UUID that identifies the account for later reference',
  })
  id: string

  @ApiProperty({
    type: String,
    description: 'A human-readable account number',
  })
  account_number: string

  @ApiProperty({
    enum: AccountStatus,
    example: AccountStatus.SUBMITTED,
  })
  status: AccountStatus

  @ApiProperty({
    enum: CryptoStatus,
    example: CryptoStatus.INACTIVE,
  })
  crypto_status: CryptoStatus

  @ApiProperty({
    type: String,
    example: 'USD',
  })
  currency: string

  @ApiProperty({
    type: String,
    description:
      'EOD equity calculation (cash + long market value + short market value)',
  })
  last_equity: string

  @ApiProperty({
    type: String,
    format: 'date-time',
    example: '2022-07-14T17:25:21.145057Z',
  })
  created_at: string
}

export class CreateAccountDto {
  @ApiProperty({
    enum: EnabledAssets,
    required: false,
  })
  enabled_assets?: EnabledAssets

  @ApiProperty({
    type: () => Contact,
  })
  contact: Contact

  @ApiProperty({
    type: () => Identity,
  })
  identity: Identity

  @ApiProperty({
    type: () => Disclosures,
  })
  disclosures: Disclosures

  @ApiProperty({
    type: () => Agreement,
  })
  agreements: Agreement[]

  @ApiProperty({
    type: () => Document,
    required: false,
  })
  documents?: Document[]

  @ApiProperty({
    type: () => TrustedContact,
    required: false,
  })
  trusted_contact?: TrustedContact
}

export class CipDto {
  @ApiProperty({
    type: String,
    required: false,
  })
  provider_name?: string[]

  @ApiProperty({
    type: () => Kyc,
    required: false,
  })
  kyc?: Kyc

  @ApiProperty({
    type: () => CipDocument,
    required: false,
  })
  document?: CipDocument

  @ApiProperty({
    type: () => CipPhoto,
    required: false,
  })
  photo: CipPhoto

  @ApiProperty({
    type: () => CipIdentity,
    required: false,
  })
  identity: CipIdentity

  @ApiProperty({
    type: () => CipWatchlist,
    required: false,
  })
  watchlist: CipWatchlist
}
