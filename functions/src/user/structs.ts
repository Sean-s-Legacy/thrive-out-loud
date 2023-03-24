import { USER_FIELDS } from "../utils/firestore";

export interface MenteeSignUpPayLoad {
    [USER_FIELDS.USER_EMAIL]: string
    [USER_FIELDS.FIRST_NAME]: string
    [USER_FIELDS.LAST_NAME]: string;
    [USER_FIELDS.PASSWORD]:string;
    [USER_FIELDS.MENTEE_PRONOUNS]: string;
    [USER_FIELDS.ABOUT_MENTEE]:string;
    [USER_FIELDS.MENTEE_FOCUS_AREA]:string;
    [USER_FIELDS.MENTEE_SOCIAL_LINK]:string;
    
  }

  export interface MenteeSignInPayLoad {
    [USER_FIELDS.USER_EMAIL]?: string
    [USER_FIELDS.PASSWORD]?: string
    
  }

  export interface FirebaseUserPayload {
    displayName: string,
    password: string,
    email: string,
    mentee_pronouns?:string,
    mentee_focus_area?:string,
    mentee_social_link?:string,
    emailVerified: boolean,
    //photoURL: string,
    disabled: boolean
  }