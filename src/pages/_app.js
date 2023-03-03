import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

//this code may need to be added elsewhere
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWORcOPmVGmLqihmqDI3XHJ2M8N-AIX1o",
  authDomain: "seans-legacy.firebaseapp.com",
  projectId: "seans-legacy",
  storageBucket: "seans-legacy.appspot.com",
  messagingSenderId: "214025308769",
  appId: "1:214025308769:web:d998a8304142e5cb22b820",
  measurementId: "G-XPZHC2PPRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);