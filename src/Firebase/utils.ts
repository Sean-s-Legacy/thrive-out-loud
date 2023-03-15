import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { config } from "./config";

export const app = !getApps().length ? initializeApp(config) : getApp();

export const auth = getAuth(app);

export const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.addScope("profile");
GoogleProvider.addScope("email");
GoogleProvider.setCustomParameters({ prompt: "select_account" });
