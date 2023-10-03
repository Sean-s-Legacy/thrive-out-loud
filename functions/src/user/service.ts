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



export const sendVerificationCode = async (payload: any, uid:any) => {
  console.log("+++++++++++++++++++ send verification code +++++++++++++++++++");

  try {

    const { phone_number } = payload

    // const accountSid = process.env.TWILIO_ACCOUNT_SID;
    // const authToken = process.env.TWILIO_AUTH_TOKEN;
    const accountSid = "AC3af53e9b4e3f56a2c453998c7ac0c347"
    const authToken = "f4a58216cd5cfeccedd485fc835daa0f";
    const verifySid = "VAb9ffa8f3ebfe8a768187a7c991849de1";
    const client = require("twilio")(accountSid, authToken);

    // client.verify.v2.services
    //             .create({friendlyName: 'My First Verify Service'})
    //             .then((service:any) => client.verify.v2
    //             .services(service.sid)
    //             .verifications.create({ to: "+9177677049", channel: "sms" })
    //             .then((verification:any) => console.log(verification.status))
    //             .then(() => {
    //               console.log("here")
    //               const readline = require("readline").createInterface({
    //                 input: process.stdin,
    //                 output: process.stdout,
    //               });
    //               readline.question("Please enter the OTP:", (otpCode: any) => {
    //                 client.verify.v2
    //                   .services(service.sid)
    //                   .verificationChecks.create({ to: "+19177677049", code: otpCode })
    //                   .then((verification_check: any) => console.log(verification_check.status))
    //                   .then(() => readline.close());
    //               });
    //             }));

    client.verify.v2
      .services(verifySid)
      .verifications.create({ to: "+19177677049", channel: "sms" })
      .then((verification:any) => console.log(verification.status))
      .then(() => {
        const readline = require("readline").createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        
        readline.question("Please enter the OTP:", (otpCode: any) => {
          console.log("OPT!!!!!", otpCode)
          client.verify.v2
            .services(verifySid)
            .verificationChecks.create({ to: "+19177677049", code: otpCode })
            .then((verification_check: any) => console.log(verification_check.status))
            .then(() => readline.close());
        });
      });



   
    if (!!phone_number) {
      console.log("phone number::::::", phone_number)
      
    } else {
      return "no pay load";
    }
    return phone_number
  } catch (error) {
    throw error;
  }
};




//  export const generateTwoFactor = (phoneNumber: USER_FIELDS.USER_PHONE )=>{
    
//     const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container-id', { size: "invisible"}, auth);
//     if (user){ multiFactor(user).getSession()
//         .then(function (multiFactorSession) {
//             // Specify the phone number and pass the MFA session.
//             const phoneInfoOptions = {
//                 phoneNumber: phoneNumber,
//                 session: multiFactorSession
//             };

//             const phoneAuthProvider = new PhoneAuthProvider(auth);

//             // Send SMS verification code.
//             return phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier);
//         })
//   }}
