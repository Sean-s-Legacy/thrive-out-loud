//@ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, GoogleProvider } from "../Firebase/utils";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import apiEndPoint from "../Services/Api"

const AuthContext = React.createContext<any>();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userExists, loading] = useAuthState(auth);

  const router = useRouter();

  function signInWithGoogle() {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user);
        // console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        router.push("/dashboard");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user in sign up")
        console.log(user)
        
        // create user in database
        const data = {
          "user_name_first": "",
          "user_name_last": "",
          "user_email": email,
          "user_pswd": password
        }
        console.log(data)
        try{
          apiEndPoint.users.saveUserInFirestore(data)
        }catch(error){
          console.log("error ocurrs" + error)
        }
        
        if (!user.emailVerified) {
          router.push({
            // Email is not verified, proceed to the email-verification
            pathname: "/email-verification",
          });
        } else {
          // Email is already verified, proceed to the dashboard
          setCurrentUser(user);
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
        router.push("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  function logout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setCurrentUser(null);
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  useEffect(() => {
    //runs on page load - listens to the authentication state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signIn,
    signInWithGoogle,
    logout,
    resetPassword,
    signUp,
    userExists,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
