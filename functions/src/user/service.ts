import { FirebaseUserPayload, FirestoreUserData} from "./structs";
import * as admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import * as dbService from "./dbService";
import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } from "../config";
import { MenteeSignUpPayLoad } from "./structs";

// @ts-ignore
// import { brevoApiKey } from "../../brevo-config";
import { BREVO_API_KEY } from "../config";

// Brevo setup

const brevo = require("@getbrevo/brevo");

// Initialize the Brevo API client
let defaultClient = brevo.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = BREVO_API_KEY;

export const createAccount = async (payload: Partial <MenteeSignUpPayLoad>) => {
  console.log("+++++++++++++++++++ create Account in service.ts +++++++++++++++++++");

  try {
    if (!!payload) {
      console.log(payload)
      const {
        user_email,
        user_pswd,
        user_name_first,
        user_name_last,
        user_chosen_name,
        user_date_of_birth,
        user_location,
        user_pronouns,
        user_gender_identity,
        user_ethnicity,
        user_match_on_ethnicity,
        user_language,
        user_industry,
        user_focus_area,
        user_sexual_orientation,
        user_role } =
        payload;
        console.log("User Email:", user_email);
        console.log("User Password:", user_pswd);
        console.log("User First Name:", user_name_first);
        console.log("User Last Name:", user_name_last);
        console.log("User Chosen Name:", user_chosen_name);
        console.log("User Date of Birth:", user_date_of_birth);
        console.log("User Location:", user_location);
        console.log("User Pronouns:", user_pronouns);
        console.log("User Industry:", user_industry);
        console.log("User Focus Area:", user_focus_area);
        console.log("User Gender Identity:", user_gender_identity);
        console.log("User Sexual Orientation:", user_sexual_orientation);
        console.log("User Role:", user_role);
      const displayName = user_name_first + " " + user_name_last || '';
      const email = user_email || '';
      const password = user_pswd || '';
      const firebaseUserData: FirebaseUserPayload = {
        displayName: displayName,
        email: email,
        password: password,
        emailVerified: false,
        phoneVerified: false,
        disabled: false,
      };

      console.log("FirebaseUserData:", firebaseUserData)

      // Create user in Firebase Authentication
      const userResponse: admin.auth.UserRecord = await admin
        .auth()
        .createUser(firebaseUserData);

      console.log(userResponse);

      const firestoreUserData: FirestoreUserData = {
        user_chosen_name: user_chosen_name ?? '',
        user_pronouns: user_pronouns ?? '',
        user_date_of_birth: user_date_of_birth ?? '',
        user_location: user_location ?? '',
        user_gender_identity: user_gender_identity ?? [],
        user_sexual_orientation: user_sexual_orientation ?? [],
        user_ethnicity: user_ethnicity ?? [],
        user_match_on_ethnicity: user_match_on_ethnicity ?? false,
        user_language: user_language ?? [],
        user_industry: user_industry ?? [],
        user_focus_area: user_focus_area ?? [],
        user_email: user_email ?? '',
        id: userResponse.uid ?? '',
        user_role: user_role ?? '',
      };

      console.log("FirestoreUserData:", firestoreUserData)

      // Insert data to firestore collection
      await dbService.createAccount(firestoreUserData);
      console.log("+++++++++++++++++++ after create +++++++++++++++++++");

      // Call the email verification

      const verificationPayload = {
        userEmail: user_email,
        callbackUrl: "http://localhost:3000/emailVerificationSuccess",
      };

      await sendBrevoEmailVerification(verificationPayload);

      // return userResponse;
      return { message: "User created successfully" };
    } else {
      return "no pay load";
    }
  } catch (error) {
    throw error;
  }
};

export const createMenteeAccount = async (payload: any) => {
  console.log("+++++++++++++++++++ create Mentee +++++++++++++++++++");

  try {
    if (!!payload) {
      // const { user_email, user_pswd, user_name_first, user_name_last } =
      //   payload;

      // const firebaseUserData: FirebaseUserPayload = {
      //   displayName: user_name_first + " " + user_name_last,
      //   email: user_email,
      //   password: user_pswd,
      //   emailVerified: false,
      //   disabled: false,
      // };

      // const userResponse: admin.auth.UserRecord = await admin
      //   .auth()
      //   .createUser(firebaseUserData);

      // console.log(userResponse)

      // Insert data to firestore collection
      const result = await dbService.createMenteeAccount(payload);
      console.log("+++++++++++++++++++ after create +++++++++++++++++++");
      console.log(result);

      // return userResponse;
      return result;
    } else {
      return "no pay load";
    }
  } catch (error) {
    throw error;
  }
};

export const sendBrevoEmailVerification = async (payload: any) => {
  try {
    if (!!payload) {
      const { userEmail, callbackUrl } = payload;

      console.log("Received request to send verification email to:", userEmail);

      const actionCodeSettings = {
        url: callbackUrl,
      };

      const actionLink = await getAuth().generateEmailVerificationLink(
        userEmail,
        actionCodeSettings
      );

      // // Initialize the Brevo API client with your API key
      let apiInstance = new brevo.TransactionalEmailsApi();
      let sendSmtpEmail = new brevo.SendSmtpEmail();

      sendSmtpEmail = {
        to: [
          {
            email: userEmail,
          },
        ],
        templateId: 3,
        params: {
          actionLink: actionLink ?? "",
        },
        headers: {
          "X-Mailin-custom":
            "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
        },
      };

      // Send the transactional email
      const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

      // return userResponse;
      return result;
    } else {
      return "no pay load";
    }
  } catch (error) {
    throw error;
  }
};

// export const findUserById = async() => {

//     try {
//         const usersRef: FirebaseFirestore.DocumentReference = db
//         .collection(USER_FIELDS.USER_EMAIL)
//         .doc(String("VQy24xYz9qiUD0F9H9tY").trim());

//         const userDoc: FirebaseFirestore.DocumentData = await usersRef.get()

//         console.log('==============find email =========================:>> ')
//         console.log(userDoc)

//     } catch (error) {
//         console.log(error)
//     }
// }
//   app.post('/signup', async (req:any, res:any) => {
//     const user = {
//         email: req.body.email,
//         password: req.body.password
//     }

//   const userResponse = await admin.auth().createUser({
//       email: user.email,
//       password: user.password,
//       emailVerified:false,
//       disabled: false,

//   });
//   res.json(userResponse);
// })
// }
// export const createuserEndpointsAccount = async (payload: any) => {
//   console.log("+++++++++++++++++++ create userEndpoints +++++++++++++++++++");

//   try {
//     if (!!payload) {
//       const { user_email, user_pswd, user_name_first, user_name_last } =
//         payload;

//       const firebaseUserData: FirebaseUserPayload = {
//         displayName: user_name_first + " " + user_name_last,
//         email: user_email,
//         password: user_pswd,
//         emailVerified: false,
//         disabled: false,
//       };
//       const userResponse: admin.auth.UserRecord = await admin
//         .auth()
//         .createUser(firebaseUserData);

//       // console.log(userResponse)

//       // Insert data to firestore collection
//       const result = await dbService.createuserEndointsAccount(payload);
//       console.log("+++++++++++++++++++ after create +++++++++++++++++++");
//       console.log(result);

//       return userResponse;
//     } else {
//       return "no pay load";
//     }
//   } catch (error) {
//     throw error;
//   }
// };

export const sendVerificationCode = async (payload: any) => {
  console.log("+++++++++++++++++++ send verification code +++++++++++++++++++");

  try {
    const { phone_number } = payload;
    console.log("Acout!!!!!!", TWILIO_ACCOUNT_SID);
    const accountSid = TWILIO_ACCOUNT_SID;
    const authToken = TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    if (!phone_number) {
      return "no pay load";
    }

    const { sid: verifySid } = await client.verify.v2.services.create({
      friendlyName: "My First Verify Service",
    });

    console.log("SID", verifySid);

    const { status: verificationStatus } = await client.verify.v2
      .services(verifySid)
      .verifications.create({ to: phone_number, channel: "sms" });

    console.log("Status!!!!!!!!!!!!", verificationStatus);

    return { verifySid, phone_number };
  } catch (error) {
    throw error;
  }
};

export const verifyOTPCode = async (payload: any) => {
  console.log("+++++++++++++++++++ check OTP Code +++++++++++++++++++");

  try {
    const { OTPCode, phone_number, verifySid } = payload;

    if (!OTPCode || !phone_number || !verifySid) {
      return "no payload or payload incomplete";
    }
    console.log("OTP::::::", OTPCode);

    const accountSid = TWILIO_ACCOUNT_SID;
    const authToken = TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    const verifyOTPCode = await client.verify.v2
      .services(verifySid)
      .verificationChecks.create({ to: phone_number, code: OTPCode });

    console.log("OTP RESULT", verifyOTPCode);
    if (verifyOTPCode.status === "approved") {
      dbService.updatePhoneNumberVerificationStatus(true);
    } else {
      dbService.updatePhoneNumberVerificationStatus(false);
    }
    return verifyOTPCode.status;
  } catch (error) {
    throw error;
  }
};
