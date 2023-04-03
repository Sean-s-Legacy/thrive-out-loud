import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { config } from "./config";

// Creates and initializes a FirebaseApp instance.
export const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.addScope("profile");
GoogleProvider.addScope("email");
GoogleProvider.setCustomParameters({
  prompt: "select_account",
  ux_mode: "redirect",
});
