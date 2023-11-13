// API BASE AND ENDPOINTS

import EmailVerificationSuccess from "@/pages/emailVerificationSuccess";

//  let baseUrl = process.env.NEXT_APP_BASEURL;
let baseUrl = "https://us-central1-seans-legacy.cloudfunctions.net/app";

const users = {
  createAccount: async (data) => {
    try {
      console.log("Create Account Now");
      const response = await fetch(`${baseUrl}/user/createAccount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Error create account:", response.statusText);
      }

      const responseData = await response.json();
      console.log("Response Data:", responseData);
    } catch (error) {
      console.error("Error create account:", error);
      throw error;
    }
  },
  sendEmailVerification: async (data) => {
    try {
      await fetch(`${baseUrl}/user/emailVerification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error sending email verification:", error);
      throw error;
    }
  },
  saveUserInFirestore: async (data) => {
    try {
      await fetch(`${baseUrl}/user/createMentee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error saving user in firestore:", error);
      throw error;
    }
  },
};

const apiEndPoint = {
  users,
};

export default apiEndPoint;
