// import * as admin from "firebase-admin";
import { COLLECTION, db, USER_FIELDS } from "../utils/firestore";
import { MenteeSignUpPayLoad } from "./structs";
// const { v4: uuidv4 } = require("uuid");


export const createMenteeAccount = async (
    payload: MenteeSignUpPayLoad
) => {
    try {
        const { user_email, user_pswd, user_name_first, user_name_last, mentee_pronouns } = payload;
        const newUserDocRef: FirebaseFirestore.DocumentReference = db
            .collection(COLLECTION.USERS).doc()

        const user = {
            [USER_FIELDS.USER_NAME]: {
                [USER_FIELDS.FIRST_NAME]: user_name_first || "",
                [USER_FIELDS.LAST_NAME]: user_name_last || "",
            },

            [USER_FIELDS.PASSWORD]: user_pswd || "",
            [USER_FIELDS.MENTEE_PRONOUNS]: mentee_pronouns || "",
            [USER_FIELDS.USER_EMAIL]: user_email || "",
        }

     await newUserDocRef.set(user);
        

    } catch (error) {
        console.log(error)
    }
}