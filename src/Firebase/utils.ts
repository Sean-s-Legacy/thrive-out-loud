import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { config } from "./config";

export const app = initializeApp(config) 

export const auth = getAuth(app);

export const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.addScope("profile");
GoogleProvider.addScope("email");
GoogleProvider.setCustomParameters({ prompt: "select_account" ,ux_mode: "redirect"});
