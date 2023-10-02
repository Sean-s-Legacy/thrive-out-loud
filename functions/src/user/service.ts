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


const mapUser = (user: admin.auth.UserRecord) => {

  // To-do:  check claims
  // const customClaims = (user.customClaims || { role_type: "" }) as { role_type?: string };
  // const role = customClaims.role_type ? customClaims.role_type : "";


  return {
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || "",
      // role,
      lastSignInTime: user.metadata.lastSignInTime,
      creationTime: user.metadata.creationTime,
  };
};

export const sendVerificationCode = async (payload: any, uid:any) => {
  console.log("+++++++++++++++++++ send verification code +++++++++++++++++++");

  try {

    const { phone_number } = payload
    // const auth: any = getAuth()
 
    
    // const user = auth.currentUser
    const res = await admin.auth().getUser(uid)
    const userRecord =  mapUser(res)
    console.log("RESPONSE!!!!!!!!!!!", res)
    console.log("USERRecord!!!!!!!!!!!", userRecord)



   
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
