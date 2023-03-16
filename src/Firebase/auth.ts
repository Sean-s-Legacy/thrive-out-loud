import { auth } from "./utils";
import 'firebase/auth'


// Get Id token
// export const getToken = async () => {
//   if (auth.currentUser) {
//     const token: string = await auth.currentUser.getIdToken(true);
//     if (token) {
//       return token
//     }
//     return null
//   }
//   return null
// }

// Get Id token result
// export const getTokenResult = async (): Promise<any> => {
//   if (auth.currentUser) {
//     return auth.currentUser.getIdTokenResult();
//   }
//   return Promise.reject("No auth.currentUser!")
// }

// Sign out
// export const doSignOut = async () : Promise<void> => {
//   return auth.signOut();
// }
// Get UID
// export const getUserId = (): string => {
//   return auth.currentUser ? auth.currentUser.uid : ""
// }

// Check if user is logged in
// export const getUser = (): any => {
//   return auth.currentUser ? auth.currentUser: null
// }

// Get User Email
export const getUserEmail = (): string => {
  return (auth.currentUser && auth.currentUser.email) ? auth.currentUser.email : ""
}
