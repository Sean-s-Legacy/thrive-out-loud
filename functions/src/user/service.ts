import { FirebaseUserPayload } from "./structs";
import * as admin from "firebase-admin";
import * as dbService from "./dbService";

// @ts-ignore
export const createMenteeAccount = async (payload: any) => {
  console.log("+++++++++++++++++++ create Mentee +++++++++++++++++++");

  try {
    if (!!payload) {
      const { user_email, user_pswd, user_name_first, user_name_last } =
        payload;

      const firebaseUserData: FirebaseUserPayload = {
        displayName: user_name_first + " " + user_name_last,
        email: user_email,
        password: user_pswd,
        emailVerified: true,
        disabled: false,
      };
      const userResponse: admin.auth.UserRecord = await admin
        .auth()
        .createUser(firebaseUserData);

      // console.log(userResponse)

      // Insert data to firestore collection
      const result = await dbService.createMenteeAccount(payload);
      console.log("+++++++++++++++++++ after create +++++++++++++++++++");
      console.log(result);

      return userResponse;
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
export const createuserEndpointsAccount = async (payload: any) => {
  console.log("+++++++++++++++++++ create userEndpoints +++++++++++++++++++");

  try {
    if (!!payload) {
      const { user_email, user_pswd, user_name_first, user_name_last } =
        payload;

      const firebaseUserData: FirebaseUserPayload = {
        displayName: user_name_first + " " + user_name_last,
        email: user_email,
        password: user_pswd,
        emailVerified: false,
        disabled: false,
      };
      const userResponse: admin.auth.UserRecord = await admin
        .auth()
        .createUser(firebaseUserData);

      // console.log(userResponse)

      // Insert data to firestore collection
      const result = await dbService.createuserEndointsAccount(payload);
      console.log("+++++++++++++++++++ after create +++++++++++++++++++");
      console.log(result);

      return userResponse;
    } else {
      return "no pay load";
    }
  } catch (error) {
    throw error;
  }
};

export const sendVerificationCode = async (payload: any) => {
  console.log("+++++++++++++++++++ send verification code +++++++++++++++++++");

  try {
    const { phone_number } = payload;
    console.log("ACCOUNT", process.env.TWILIO_ACCOUNT_SID);

    // const accountSid = process.env.TWILIO_ACCOUNT_SID;
    // const authToken = process.env.TWILIO_AUTH_TOKEN;
    const accountSid = "AC3af53e9b4e3f56a2c453998c7ac0c347";
    const authToken = "f4a58216cd5cfeccedd485fc835daa0f";
    const client = require("twilio")(accountSid, authToken);

    if (!phone_number) {
      return "no pay load";
    }

    const { sid: verifySid } = await client.verify.v2.services.create({
      friendlyName: "My First Verify Service",
    });

    console.log("SID", verifySid);

    const { status: verificationStatus } = client.verify.v2
      .services(verifySid)
      .verifications.create({ to: phone_number, channel: "sms" });

    console.log("Status!!!!!!!!!!!!", verificationStatus);

    return { verifySid, phone_number };
  } catch (error) {
    throw error;
  }
};

export const checkOTPCode = async (payload: any) => {
  console.log("+++++++++++++++++++ check OTP Code +++++++++++++++++++");

  try {
    const { OTPCode, phone_number, verifySid } = payload;

    if (!OTPCode || !phone_number || !verifySid) {
      return "no payload or payload incomplete";
    }
    console.log("OTP::::::", OTPCode);

    const accountSid = "AC3af53e9b4e3f56a2c453998c7ac0c347";
    const authToken = "f4a58216cd5cfeccedd485fc835daa0f";
    const client = require("twilio")(accountSid, authToken);

    const verifyOTPCode = await client.verify.v2
      .services(verifySid)
      .verificationChecks.create({ to: phone_number, code: OTPCode });

    console.log("OTP RESULT", verifyOTPCode);

    return verifyOTPCode.status;
  } catch (error) {
    throw error;
  }
};
