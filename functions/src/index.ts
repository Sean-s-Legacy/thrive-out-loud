// import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const functions = require("firebase-functions");
import application from "./app";
import { STORAGE_BUCKET } from "./config";
import { init } from "./utils/firestore";
import { credentials } from "./utils/serviceAccount";
import { ServiceAccount } from "firebase-admin";
import { UserRecord } from "firebase-functions/v1/auth";

console.log("========== KMS_BUCKET NAME: ========", STORAGE_BUCKET);
// Initialise App
admin.initializeApp({
  credential: admin.credential.cert(credentials as ServiceAccount),
  // storageBucket:`${KMS_BUCKET_NAME}.appspot.com`
});

// Firestore database
const db = admin.firestore();

// Cloud Storage
const storageBucket: any = admin.storage();

init(db, storageBucket);

// const runtimeOpts: any = {
//   timeoutSeconds: 540,
//   memory: "4GB",
// };

// HTTP Requests (Trigger)
export const app = functions.https.onRequest(application);

//main function When a user is deleted in authentication, the user data in firestore will be deleted
export const deleteUserData = functions.auth
  .user()
  .onDelete(async (user: UserRecord) => {
    const userId = user.uid;

    //Function to delete all subcollections of a document
    async function deleteSubcollections(
      docRef: FirebaseFirestore.DocumentReference
    ): Promise<void> {
      const subcollections = await docRef.listCollections();
      const promises = subcollections.map(async (subcollection) => {
        const subDocs = await subcollection.get();
        const subPromises = subDocs.docs.map((doc) => deleteDocument(doc.ref));
        await Promise.all(subPromises);
      });
      await Promise.all(promises);
    }

    //Function to delete a documen and its subcollections
    async function deleteDocument(
      docRef: FirebaseFirestore.DocumentReference
    ): Promise<void> {
      await deleteSubcollections(docRef);
      await docRef.delete();
    }

    //Function to delete a user's data from a collection
    async function deleteUserDataFromCollection(
      collectionName: string
    ): Promise<void> {
      const userDocRef = db.collection(collectionName).doc(userId);
      await deleteDocument(userDocRef);
    }

    try {
      console.log(`Starting deletion for user ID: ${userId}`);

      //list the collections that contain user data
      const collectionsToDelete = ["users"];

      //Delete user data from each specified collection
      const promises = collectionsToDelete.map((collection) =>
        deleteUserDataFromCollection(collection)
      );
      await Promise.all(promises);

      console.log(`Successfully deleted user data for user ID: ${userId}`);
    } catch (error) {
      console.error(`Error deleting user data for user ID: ${userId}`, error);
    }
  });
