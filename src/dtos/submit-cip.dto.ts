import { ApiProperty } from '@nestjs/swagger';

export enum CIPApprovalStatus {
  approved = 'approved',
  rejected = 'rejected'
}

export class Kyc {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check'
  })
  id: string

  @ApiProperty({
    type: Number,
    description: 'Overall risk score returned by KYC provider or assessed',
    required: false
  })
  risk_score?: number

  @ApiProperty({
    type: String,
    description: 'Overall risk level returned by KYC provider or assessed'
  })
  risk_level: string

  @ApiProperty({
    type: String,
    description: 'The list of risk categories returned by the KYC provider or assessed',
    required: false
  })
  risk_categories?: string

  @ApiProperty({
    type: String,
    description: 'Given and family name of applicant'
  })
  applicant_name: string

  @ApiProperty({
    type: String
  })
  email_address: string

  @ApiProperty({
    type: String,
  })
  nationality: string

  @ApiProperty({
    type: String,
    description: 'Government issued ID number of applicant'
  })
  id_number: string

  @ApiProperty({
    type: String,
    format: 'date'
  })
  date_of_birth: string

  @ApiProperty({
    type: String,
    description: 'Concatenated street address, city, state and country of applicant'
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
    format: 'date-time'
  })
  kyc_completed_at: string

  @ApiProperty({
    type: String
  })
  ip_address: string

  @ApiProperty({
    type: String,
    format: 'date-time'
  })
  check_initiated_at: string

  @ApiProperty({
    type: String,
    format: 'date-time'
  })
  check_completed_at: string

  @ApiProperty({
    enum: CIPApprovalStatus,
  })
  approval_status: CIPApprovalStatus

  @ApiProperty({
    type: String,
  })
  approved_by: string

  @ApiProperty({
    type: String,
    required: false
  })
  approved_reason?: string

  @ApiProperty({
    type: String,
    format: 'date-time'
  })
  approved_at: string
}

export enum CIPResult {
  clear = 'clear'
}

export enum CIPStatus {
  complete = 'complete'
}

export class CIPDocument {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check'
  })
  id: string

  @ApiProperty({
    enum: CIPResult,
    description: 'Overall result of specific check'
  })
  result: CIPResult

  @ApiProperty({
    enum: CIPResult,
    description: 'Overall status of specific check'
  })
  status: CIPStatus

  @ApiProperty({
    type: String,
    format: 'date-time'
  })
  created_at: string

  @ApiProperty({
    type: String,
    format: 'date-time',
    required: false
  })
  date_of_birth: string

  @ApiProperty({
    type: String,
    format: 'date-time',
    required: false
  })
  date_of_expiry?: string

  @ApiProperty({
    type: Number,
    required: false,
    description: 'Number of the document that was checked'
  })
  document_numbers?: number

  @ApiProperty({
    type: String,
    required: false,
    description: 'Type of the document that was checked'
  })
  document_type?: string

  @ApiProperty({
    type: String,
    required: false,
    description: 'First name extracted from the document'
  })
  first_name?: string

  @ApiProperty({
    type: String,
    required: false,
    description: 'Last name extracted from the document'
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
    enum: () => CIPResult,
    required: false,
    description: 'Checks whether the age calculated from the document’s date of birth data point is greater than or equal to the minimum accepted age set at account level'
  })
  age_validation?: CIPResult

  @ApiProperty({
    enum: () => CIPResult,
    required: false,
    description: 'Checks whether the image of the document has been found in our internal database of compromised documents'
  })
  compromised_document?: CIPResult

  @ApiProperty({
    enum: () => CIPStatus,
    required: false,
    description: 'Checks whether the document has been identified as lost, stolen or otherwise compromised'
  })
  police_record?:  CIPStatus

  @ApiProperty({
    enum: () => CIPResult,
    required: false,
    description: 'Checks whether data on the document is consistent with data provided when creating an applicant through the API'
  })
  data_comparison?: CIPResult

  @ApiProperty({
    type: Object,
    required: false,
    description: 'For example: {"date_of_birth": "clear", "date_of_expiry": "clear” "document_numbers”: "clear”, "document_type”: "clear”, "first_name”: "clear”, "gender”: "clear”, "issuing_country”: "clear”, "last_name”: "clear”}'
  })
  data_comparison_breakdown?: Object

  @ApiProperty({
    enum: () => CIPResult,
    required: false,
    description: 'Checks whether the document was of sufficient quality to verify'
  })
  image_integrity: CIPResult

  @ApiProperty({
    type: Object,
    required: false,
    description: 'For example: {"colour_picture”: "clear”, "conclusive_document_quality”: "clear”, "image_quality”: "clear”, "supported_document”: "clear”}'
  })
  image_integrity_breakdown?: Object

  @ApiProperty({
    type: Object,
    required: false,
    description: 'Checks whether visual (non-textual) elements are correct given the document type. Example: {"digital_tampering”: "clear”, "face_detection”: "clear”, "fonts”: "clear”, "original_document_present”: "clear”, "picture_face_integrity”: "clear”, "security_features”: "clear”, "template”: "clear”}\n'
  })
  visual_authenticity?: Object
}

export class CIPPhoto {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check'
  })
  id: string

  @ApiProperty({
    enum: CIPResult,
    description: 'Overall result of specific check'
  })
  result: CIPResult

  @ApiProperty({
    enum: CIPResult,
    description: 'Overall status of specific check'
  })
  status: CIPStatus

  @ApiProperty({
    type: String,
    format: 'date-time'
  })
  created_at: string

  @ApiProperty({
    enum: CIPResult,
    description: 'Checks whether the face in the document matches the face in the live photo'
  })
  face_comparison: CIPResult

  @ApiProperty({
    type: Object,
    description: '{“face_match”:{“result”: “clear”,“properties”:{“score”: “80”}}}',
    required: false
  })
  face_comparison_breakdown: Object

  @ApiProperty({
    enum: () => CIPResult,
    required: false,
    description: 'Checks whether the quality and integrity of the uploaded files were sufficient to perform a face comparison'
  })
  image_integrity: CIPResult

  @ApiProperty({
    type: Object,
    required: false,
    description: 'For example: {“face_detected”:{“result”: “clear”},“source_integrity”: {“result”: “clear”}}'
  })
  image_integrity_breakdown?: Object

  @ApiProperty({
    type: Object,
    required: false,
    description: 'Checks whether the person in the live photo is real (not a spoof)\n'
  })
  visual_authenticity?: Object
}

export class CIPIdentity {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check'
  })
  id: string

  @ApiProperty({
    enum: CIPResult,
    description: 'Overall result of specific check'
  })
  result: CIPResult

  @ApiProperty({
    enum: CIPResult,
    description: 'Overall status of specific check'
  })
  status: CIPStatus

  @ApiProperty({
    type: String,
    format: 'date-time'
  })
  created_at: string

  @ApiProperty({
    enum: CIPResult,
    description: 'Represents the matched address for the applicant',
    required: false
  })
  matched_address?: CIPResult

  @ApiProperty({
    type: Object,
    description: 'For example: [{“id”: “19099121”,“match_types”:[“credit_agencies”,“voting_register”]}]',
    required: false
  })
  matched_addresses?: Object

  @ApiProperty({
    enum: CIPResult,
    description: 'Shows the total number of sources found for applicant’s identity',
    required: false
  })
  sources: CIPResult

  @ApiProperty({
    type: Object,
    description: 'For example: {“total_sources”: {“result”: “clear”,“properties”: {“total_number_of_sources”: “3”}}}\n',
    required: false
  })
  sources_breakdown?: Object

  @ApiProperty({
    enum: CIPResult,
    description: 'Result if it was cleared against a data source'
  })
  address: CIPResult

  @ApiProperty({
    type: Object,
    description: 'For example: {“credit_agencies”: {“result”: “clear”,“properties”:{“number_of_matches”:“1”}}',
    required: false
  })
  address_breakdown?: Object

  @ApiProperty({
    enum: CIPResult,
    description: 'Result if it was cleared against a data source'
  })
  date_of_birth: CIPResult

  @ApiProperty({
    type: Object,
    description: 'For example: {“credit_agencies”:{“result”: “clear”,“properties”: {“number_of_matches”: “1”}}\n',
    required: false
  })
  date_of_birth_breakdown?: Object
}

export class CIPWatchlist {
  @ApiProperty({
    type: String,
    format: 'uuid',
    description: 'Internal ID of check'
  })
  id: string

  @ApiProperty({
    enum: CIPResult,
    description: 'Overall result of specific check'
  })
  result: CIPResult

  @ApiProperty({
    enum: CIPResult,
    description: 'Overall status of specific check'
  })
  status: CIPStatus

  @ApiProperty({
    type: String,
    format: 'date-time'
  })
  created_at: string

  @ApiProperty({
    type: Object,
    example: '[{“text”: “Record info”}]',
    required: false
  })
  records: Object

  @ApiProperty({
    enum: CIPResult,
    required: false
  })
  politically_exposed_person: CIPStatus

  @ApiProperty({
    enum: CIPResult,
    required: false
  })
  sanction: CIPStatus

  @ApiProperty({
    enum: CIPResult,
    required: false
  })
  adverse_media: CIPStatus

  @ApiProperty({
    enum: CIPResult,
    required: false
  })
  monitored_lists: CIPStatus
}

export class SubmitCIPDto {
  @ApiProperty({
    type: String,
    required: false
  })
  provider_name?: string[]

  @ApiProperty({
    type: () => Kyc,
    required: false
  })
  kyc?: Kyc

  @ApiProperty({
    type: () => CIPDocument,
    required: false
  })
  document?: CIPDocument

  @ApiProperty({
    type: () => CIPPhoto,
    required: false
  })
  photo: CIPPhoto

  @ApiProperty({
    type: () => CIPIdentity,
    required: false
  })
  identity: CIPIdentity

  @ApiProperty({
    type: () => CIPWatchlist,
    required: false
  })
  watchlist: CIPWatchlist
}
