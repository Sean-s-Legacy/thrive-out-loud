// HTTP ERROR CODES
export const CREATE_SUCCESS_CODE = 201
export const SUCCESS_CODE = 200
export const VALIDATION_ERROR__CODE = 400
export const SERVER_ERROR_CODE = 500
export const UNAUTHORISED_ERROR_CODE = 401
export const FORBIDDEN_ERROR_CODE = 403
export const BAD_REQUEST_ERROR_CODE = 400

export const HTTP_STATUS_CODES = [
  CREATE_SUCCESS_CODE,
  SUCCESS_CODE,
  VALIDATION_ERROR__CODE,
  SERVER_ERROR_CODE,
  UNAUTHORISED_ERROR_CODE,
  FORBIDDEN_ERROR_CODE,
  BAD_REQUEST_ERROR_CODE,
]


// Message
export const ERROR_MSG = "error"
export const SUCCESS_MSG = "success"
export const UNAUTHORISED_MSG = "Unauthorised"
export const FORBIDDEN_MSG = "Forbidden"
export const SERVER_ERROR_MSG = 'Internal Server Error. Please Try again !'
export const APP_ERROR = "Application Error"


// Roles that will be assigned to user using admin-auth and claim
export const enum ROLES {
  SUPER_ADMIN = "SuperAdmin",
  MENTOR = "Mentor",
  MENTEE = "Mentee",
}




