import { auth, GoogleProvider } from "@/Firebase/utils"
import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";

export default function LoginBtn() {

  const handleGoogleSignIn = async () => {
    try {
      console.log("hitting this")
     
      console.log("Google provider :>> ", GoogleProvider);

      const result = await signInWithPopup(auth, GoogleProvider);

      if (result) {
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          // const accessToken: any = credential || credential.accessToken;
          // const idToken: any = credential || credential.idToken;
          // console.log(accessToken); // Google token
          // console.log(idToken); // Firebase auth token
        }
        // await createUser(user)
      }
    } catch (err: any) {
      console.error(err);
    } finally {
    }
  };
  return (
    <Button onClick={() => console.log('dd')} type="text" className="common_btn auth_btn">
      Login
    </Button>
  );
}
