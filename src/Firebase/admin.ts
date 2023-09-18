// firebase/admin.js

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Check if Firebase Admin SDK is already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://seans-legacy-default-rtdb.firebaseio.com",
  });
}

// Export the initialized Firebase Admin app instance
module.exports = admin;
