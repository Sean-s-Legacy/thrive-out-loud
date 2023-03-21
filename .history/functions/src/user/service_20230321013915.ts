import { FirebaseUserPayload } from "./structs";
import * as admin from "firebase-admin";
import * as dbService from "./dbService"
// @ts-ignore
export const createMenteeAccount = async (payload: any) => {
    console.log(
        "+++++++++++++++++++ create Mentee +++++++++++++++++++"
    );

    try {
        if (!!payload) {

            const { user_email, user_pswd, user_name_first, user_name_last } = payload;


            const firebaseUserData: FirebaseUserPayload = {
                displayName: user_name_first + " " + user_name_last,
                email: user_email,
                password: user_pswd,
                emailVerified: false,
                disabled: false,
            }
            const userResponse: admin.auth.UserRecord = await admin.auth()
                .createUser(firebaseUserData);

            // console.log(userResponse)

            // Insert data to firestore collection
           const result =  await dbService.createMenteeAccount(payload)
            console.log(
                "+++++++++++++++++++ after create +++++++++++++++++++"
            );
            console.log(result)


            return userResponse;
        }
        else {
            return 'no pay load'
        }

    } catch (error) {
        throw error;
    }
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
}
export const createuserEndpointsAccount = async (payload: any) => {
    console.log(
        "+++++++++++++++++++ create Mentee +++++++++++++++++++"
    );

    try {
        if (!!payload) {

            const { user_email, user_pswd, user_name_first, user_name_last } = payload;


            const firebaseUserData: FirebaseUserPayload = {
                displayName: user_name_first + " " + user_name_last,
                email: user_email,
                password: user_pswd,
                emailVerified: false,
                disabled: false,
            }
            const userResponse: admin.auth.UserRecord = await admin.auth()
                .createUser(firebaseUserData);

            // console.log(userResponse)

            // Insert data to firestore collection
           const result =  await dbService.createuserEndointsAccount(payload)
            console.log(
                "+++++++++++++++++++ after create +++++++++++++++++++"
            );
            console.log(result)


            return userResponse;
        }
        else {
            return 'no pay load'
        }

    } catch (error) {
        throw error;
    }}
