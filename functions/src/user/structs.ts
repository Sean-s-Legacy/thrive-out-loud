import { USER_FIELDS } from "../utils/firestore";

export interface MenteeSignUpPayLoad {
    [USER_FIELDS.USER_EMAIL]: string
    [USER_FIELDS.FIRST_NAME]: string
    [USER_FIELDS.LAST_NAME]: string;
    [USER_FIELDS.PASSWORD]:string;
    
  }

  export interface MenteeSignInPayLoad {
    [USER_FIELDS.USER_EMAIL]?: string
    [USER_FIELDS.PASSWORD]?: string
    
  }

  export interface FirebaseUserPayload {
    displayName: string,
    password: string,
    email: string,
    emailVerified: boolean,
    //photoURL: string,
    disabled: boolean
  }

  export interface generateTwoFactorPayLoad {
    phoneNumber: string
  }