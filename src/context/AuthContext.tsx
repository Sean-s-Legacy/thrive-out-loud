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
import { MenteeSignUpPayLoad } from "functions/src/user/structs";
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
  async function signUp(data: Partial <MenteeSignUpPayLoad>) {

    // create user in database
    const email = data.user_email;
    const password = data.user_pswd;
    try {
      await apiEndPoint.users.createAccount(data)

      // After create the user, user also signe in
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setCurrentUser(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

    } catch (error) {
      console.error("Error during API request:", error);
    // } finally {
    //   router.push({
    //     pathname: "/emailVerification",
    //   });

    }
  }
  async function signIn(email, password) {
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
