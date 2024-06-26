// import * as admin from "firebase-admin";
import { COLLECTION, db, USER_FIELDS } from "../utils/firestore";
import { FirestoreUserData, MenteeSignUpPayLoad} from "./structs";
// const { v4: uuidv4 } = require("uuid");


// Adds user to Firestore
export const createAccount = async (payload: Partial <FirestoreUserData>) => {
  try {
    const { user_chosen_name, user_date_of_birth, user_pronouns, user_email, user_location, user_gender_identity, user_match_on_gender_identity, user_sexual_orientation, user_match_on_sexual_orientation, user_ethnicity, user_match_on_ethnicity, user_language, user_industry, user_focus_area, user_role, id} = payload;
    const newUserDocRef: FirebaseFirestore.DocumentReference = db
      .collection(COLLECTION.USERS)
      .doc(id || "");

    const user = {
      [USER_FIELDS.CHOSEN_NAME]: user_chosen_name || "",
      [USER_FIELDS.USER_EMAIL]: user_email || "",
      [USER_FIELDS.PRONOUNS]: user_pronouns || "",
      [USER_FIELDS.LOCATION]: user_location || "",
      [USER_FIELDS.GENDER_IDENTITY]: user_gender_identity || [],
      [USER_FIELDS.MATCH_ON_GENDER_IDENTITY]: user_match_on_gender_identity || false,
      [USER_FIELDS.SEXUAL_ORIENTATION]: user_sexual_orientation || [],
      [USER_FIELDS.MATCH_ON_SEXUAL_ORIENTATION] : user_match_on_sexual_orientation || false,
      [USER_FIELDS.ETHNICITY]: user_ethnicity || [],
      [USER_FIELDS.MATCH_ON_ETHNICITY]: user_match_on_ethnicity || false,
      [USER_FIELDS.LANGUAGE]: user_language || [],
      [USER_FIELDS.INDUSTRY]: user_industry || [],
      [USER_FIELDS.FOCUS_AREA]: user_focus_area || [],
      [USER_FIELDS.DATE_OF_BIRTH]: user_date_of_birth || "",
      [USER_FIELDS.USER_ROLE]: user_role || "",
    };

    await newUserDocRef.set(user);
  } catch (error) {
    console.log(error);
  }
};

export const createMenteeAccount = async (payload: Partial <MenteeSignUpPayLoad>) => {
  try {
    const { user_email, user_pswd, user_name_first, user_name_last } = payload;
    const newUserDocRef: FirebaseFirestore.DocumentReference = db
      .collection(COLLECTION.USERS)
      .doc();

    const user = {
      [USER_FIELDS.USER_NAME]: {
        [USER_FIELDS.FIRST_NAME]: user_name_first || "",
        [USER_FIELDS.LAST_NAME]: user_name_last || "",
      },

      [USER_FIELDS.PASSWORD]: user_pswd || "",
      [USER_FIELDS.USER_EMAIL]: user_email || "",
      [USER_FIELDS.PHONE_NUMBER_VERIFIED]: false,
    };

    await newUserDocRef.set(user);
  } catch (error) {
    console.log(error);
  }
};

export function createuserEndointsAccount(payload: any) {
  throw new Error("Function not implemented.");
}

//TO DO: need to actually update phone_number_verified field in user data after the function is created
export const updatePhoneNumberVerificationStatus = async (
  phone_number_verified: boolean
) => {
  try {
    console.log(phone_number_verified);
  } catch (error) {
    console.log(error);
  }
};
