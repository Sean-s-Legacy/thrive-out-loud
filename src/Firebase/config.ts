// --- File for all firebase configuration - to be used with initializeApp
// .env variables will be placed in .env.local file;
// ask your project lead for the variables - you need them to connect to auth/database

export const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY || " ",
  authDomain: `${process.env.NEXT_PUBLIC_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: `${process.env.NEXT_PUBLIC_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_API_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};
