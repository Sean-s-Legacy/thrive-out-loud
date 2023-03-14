export const config = {
    apiKey: process.env.NEXT_APP_API_KEY,
    authDomain: `${process.env.NEXT_APP_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.NEXT_APP_PROJECT_ID}.firebaseio.com`,
    projectId: process.env.NEXT_APP_PROJECT_ID,
    storageBucket:`${process.env.NEXT_APP_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.NEXT_APP_SENDER_ID,
    appId: process.env.NEXT_APP_API_ID,
    measurementId: `G-${process.env.NEXT_APP_MEASUREMENT_ID}`
};



  
