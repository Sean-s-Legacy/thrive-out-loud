// import * as admin from "firebase-admin";
import { COLLECTION, db, USER_FIELDS } from "../utils/firestore";
import { MenteeSignUpPayLoad } from "./structs";
// const { v4: uuidv4 } = require("uuid");

export const createAccount = async (payload: MenteeSignUpPayLoad) => {
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
      [USER_FIELDS.EMAIL_VERIFIED]: false,
    };

    await newUserDocRef.set(user);
  } catch (error) {
    console.log(error);
  }
};

export const createMenteeAccount = async (payload: MenteeSignUpPayLoad) => {
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
