// import * as functions from "firebase-functions";
const admin = require("firebase-admin");
const functions = require("firebase-functions");
import application from "./app";
import { STORAGE_BUCKET } from "./config";
import { init } from "./utils/firestore";
import { credentials } from "./utils/serviceAccount";

console.log("========== KMS_BUCKET NAME: ========", STORAGE_BUCKET);
// Initialise App
admin.initializeApp({
  credential: admin.credential.cert(credentials),
  // storageBucket:`${KMS_BUCKET_NAME}.appspot.com`
});

// Firestore database
const db: FirebaseFirestore.Firestore = admin.firestore();

// Cloud Storage
const storageBucket: any = admin.storage();

init(db, storageBucket);


// const runtimeOpts: any = {
//   timeoutSeconds: 540,
//   memory: "4GB",
// };

// HTTP Requests (Trigger)
export const app = functions.https.onRequest(application);

