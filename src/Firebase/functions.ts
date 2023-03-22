import { auth, GoogleProvider } from "@/Firebase/utils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const handleGoogleSignIn = async () => {
  try {
    // Google Auth sign in with popup
    const result = await signInWithPopup(auth, GoogleProvider);

    if (result) {
      const credential: any = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const accessToken: any = credential || credential.accessToken;
        const idToken: any = credential || credential.idToken;
        console.log(accessToken); // Google token
        console.log(idToken); // Firebase auth token
        // navigate user to home page here.
        // redirect('/dashboard');
      }
    }
  } catch (err: any) {
    console.error(err);
  } finally {
  }
};

export { handleGoogleSignIn };
