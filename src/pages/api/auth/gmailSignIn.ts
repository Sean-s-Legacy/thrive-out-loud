// import firebase from "../path/to/firebaseConfig.js";
import firebase from 'firebase/app'


const authenticateUser = async (email, password) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log("Authenticated user:", user);
  } catch (error) {
    console.error("Error authenticating user:", error);
  }
}