import { auth, GoogleProvider } from "@/Firebase/utils";
import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";

export default function LoginBtn() {
  
  return (
    <Button
      // onClick={handleGoogleSignIn}
      type="text"
      className="common_btn auth_btn"
    >
      Login
    </Button>
  );
}
