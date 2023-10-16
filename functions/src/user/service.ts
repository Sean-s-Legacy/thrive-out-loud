import { FirebaseUserPayload } from "./structs";
import * as admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import * as dbService from "./dbService";
// @ts-ignore
import { brevoApiKey } from "../../brevo-config";

// brevo
const brevo = require("@getbrevo/brevo");
// Initialize the Brevo API client
let defaultClient = brevo.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

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
