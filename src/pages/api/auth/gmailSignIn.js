import firebase from "../path/to/firebaseConfig.js";

const authenticateUser = async (email, password) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log("Authenticated user:", user);
  } catch (error) {
    console.error("Error authenticating user:", error);
  }
}