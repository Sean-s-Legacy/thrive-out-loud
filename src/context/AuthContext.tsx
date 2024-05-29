//@ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, GoogleProvider } from "../Firebase/utils";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { MenteeSignUpPayLoad } from "functions/src/user/structs";
import { USER_FIELDS } from "functions/src/utils/firestore";
import apiEndPoint from "../Services/Api"

const AuthContext = React.createContext<any>();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userExists, loading] = useAuthState(auth);

  const router = useRouter();

  function signInWithGoogle(data: Partial<MenteeSignUpPayLoad>) {
    signInWithPopup(auth, GoogleProvider)
      .then(async (result) => {
        // Get the user object from the sign in result
        const user = result.user;

        // Initialize Firestore database and create a reference to the user document
        const db = getFirestore();
        const userRef = doc(db, "users", user.uid);

        try {
          await setDoc(userRef, {
            email: user.email,
            uid: user.uid,
            // Use constants from USER_FIELDS to ensure consistency in field names
            [USER_FIELDS.USER_ROLE]: data[USER_FIELDS.USER_ROLE],
            [USER_FIELDS.CHOSEN_NAME]: data[USER_FIELDS.CHOSEN_NAME],
            [USER_FIELDS.PRONOUNS]: data[USER_FIELDS.PRONOUNS],
            [USER_FIELDS.LOCATION]: data[USER_FIELDS.LOCATION],
            [USER_FIELDS.DATE_OF_BIRTH]: data[USER_FIELDS.DATE_OF_BIRTH],
            [USER_FIELDS.ETHNICITY]: data[USER_FIELDS.ETHNICITY],
            [USER_FIELDS.LANGUAGE]: data[USER_FIELDS.LANGUAGE],
            [USER_FIELDS.INDUSTRY]: data[USER_FIELDS.INDUSTRY],
            [USER_FIELDS.FOCUS_AREA]: data[USER_FIELDS.FOCUS_AREA],
          });
          console.log("User document created successfully");
          router.push("/dashboard");
        } catch (error) {
          console.error("Error creating user document:", error);
        }
      })
      .catch((error) => {
        console.error("Error during sign in with Google:", error);
      });
  }

  async function signUp(data: Partial <MenteeSignUpPayLoad>) {

    // create user in database
    const email = data.user_email;
    const password = data.user_pswd;
    try {
      await apiEndPoint.users.createAccount(data)

      // After create the user, user also signed in
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
    } finally {
      router.push({
        pathname: "/emailVerification",
      });

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
