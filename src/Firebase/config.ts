const { NEXT_APP_API_KEY = "",
    NEXT_APP_PROJECT_ID = "",
    NEXT_APP_API_ID = ""
} = process.env;

export const config = {
    apiKey: NEXT_APP_API_KEY,
    databaseURL: `https://${NEXT_APP_PROJECT_ID}.firebaseio.com`,
    projectId: NEXT_APP_PROJECT_ID,
    appId: NEXT_APP_API_ID,
};

  
  // export const configx = {
  //   apiKey: REACT_APP_API_KEY,
  //   authDomain: `${REACT_APP_PROJECT_ID}.firebaseapp.com`,
  //   databaseURL: `https://${REACT_APP_PROJECT_ID}.firebaseio.com`,
  //   projectId: REACT_APP_PROJECT_ID,
  //   storageBucket: `${REACT_APP_PROJECT_ID}.appspot.com`,
  //   messagingSenderId: REACT_APP_SENDER_ID,
  //   appId: REACT_APP_APP_ID,
  //   measurementId: `G-${REACT_APP_MEASUREMENT_ID}`,
  // };
  
