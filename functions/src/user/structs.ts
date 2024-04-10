import { USER_FIELDS } from "../utils/firestore";

export interface MenteeSignUpPayLoad {
  [USER_FIELDS.USER_EMAIL]: string;
  [USER_FIELDS.FIRST_NAME]: string;
  [USER_FIELDS.LAST_NAME]: string;
  [USER_FIELDS.PASSWORD]: string;
  [USER_FIELDS.CHOSEN_NAME]: string;
  [USER_FIELDS.PRONOUNS]: string;
  [USER_FIELDS.LOCATION]: string;
  [USER_FIELDS.DATE_OF_BIRTH]: string;
  [USER_FIELDS.INDUSTRY]: string[];
}

export interface MenteeSignInPayLoad {
  [USER_FIELDS.USER_EMAIL]?: string;
  [USER_FIELDS.PASSWORD]?: string;
}

export interface FirebaseUserPayload {
  displayName: string;
  password: string;
  email: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  //photoURL: string,
  disabled: boolean;
}

export interface FirestoreUserData {
  [USER_FIELDS.CHOSEN_NAME]: string;
  [USER_FIELDS.USER_EMAIL]: string;
  [USER_FIELDS.PRONOUNS]: string;
  [USER_FIELDS.LOCATION]: string;
  [USER_FIELDS.DATE_OF_BIRTH]: string;
  [USER_FIELDS.INDUSTRY]: string[];
  [USER_FIELDS.ID]: string;
}
