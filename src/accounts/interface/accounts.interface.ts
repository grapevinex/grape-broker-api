export enum EnabledAssets {
  us_equity = 'us_equity',
  crypto = 'crypto',
}

export enum DisclosureContextType {
  CONTROLLED_FIRM = 'CONTROLLED_FIRM',
  AFFILIATE_FIRM = 'AFFILIATE_FIRM',
  IMMEDIATE_FAMILY_EXPOSED = 'IMMEDIATE_FAMILY_EXPOSED',
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

export enum Assetinterface {
  us_equity = 'us_equity',
  crypto = 'crypto',
}

export enum EmploymentStatus {
  unemployed = 'unemployed',
  employed = 'employed',
  student = 'student',
  retired = 'retired',
}

export enum AgreementType {
  margin_agreement = 'margin_agreement',
  account_agreement = 'account_agreement',
  customer_agreement = 'customer_agreement',
  crypto_agreement = 'crypto_agreement',
}

export enum DocumentType {
  identity_verification = 'identity_verification',
  address_verification = 'address_verification',
  date_of_birth_verification = 'date_of_birth_verification',
  tax_id_verification = 'tax_id_verification',
  account_approval_letter = 'account_approval_letter',
  w8ben = 'w8ben',
}

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
  ACCOUNT_CLOSED = 'ACCOUNT_CLOSED',
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
  ACCOUNT_CLOSED = 'ACCOUNT_CLOSED',
}

export enum CipResult {
  clear = 'clear',
}

export enum CipStatus {
  complete = 'complete',
}

export enum CipApprovalStatus {
  approved = 'approved',
  rejected = 'rejected',
}
