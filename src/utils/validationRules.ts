import { ONBOARDING_ERROR_MESSAGES } from "./OnboardingContent";
import { USER_FIELDS } from "functions/src/utils/firestore";
export function validateChosenName(data: any, errors: any) {
  if (!data[USER_FIELDS.CHOSEN_NAME]) errors[USER_FIELDS.CHOSEN_NAME] = ONBOARDING_ERROR_MESSAGES.chosenName;
  if (!data[USER_FIELDS.PRONOUNS]) errors[USER_FIELDS.PRONOUNS] = ONBOARDING_ERROR_MESSAGES.pronouns;
  if (!data[USER_FIELDS.DATE_OF_BIRTH]) errors[USER_FIELDS.DATE_OF_BIRTH] = ONBOARDING_ERROR_MESSAGES.dateOfBirth;
}

export function validateLocation(data: any, errors: any) {
  if (!data[USER_FIELDS.LOCATION]) errors[USER_FIELDS.LOCATION] = ONBOARDING_ERROR_MESSAGES.location;
}

export function validateGenderIdentity(data: any, errors: any) {
  if (data[USER_FIELDS.GENDER_IDENTITY].length === 0) errors[USER_FIELDS.GENDER_IDENTITY] = ONBOARDING_ERROR_MESSAGES.genderIdentity;
}

export function validateSexualOrientation(data: any, errors: any) {
  if (data[USER_FIELDS.SEXUAL_ORIENTATION].length === 0) errors[USER_FIELDS.SEXUAL_ORIENTATION] = ONBOARDING_ERROR_MESSAGES.sexualOrientation;
}

export function validateEthnicityAndLanguage(data: any, errors: any) {
  if (data[USER_FIELDS.ETHNICITY].length === 0) errors[USER_FIELDS.ETHNICITY] = ONBOARDING_ERROR_MESSAGES.ethnicity;
  if (data[USER_FIELDS.LANGUAGE].length === 0) errors[USER_FIELDS.LANGUAGE] = ONBOARDING_ERROR_MESSAGES.language;
}

export function validateIndustry(data: any, errors: any) {
  if (data[USER_FIELDS.INDUSTRY].length === 0) errors[USER_FIELDS.INDUSTRY] = ONBOARDING_ERROR_MESSAGES.industry;
}

export function validateFocusArea(data: any, errors: any) {
  if (data[USER_FIELDS.FOCUS_AREA].length === 0) errors[USER_FIELDS.FOCUS_AREA] = ONBOARDING_ERROR_MESSAGES.focusArea;
}
