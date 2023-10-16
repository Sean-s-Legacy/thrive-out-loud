// API BASE AND ENDPOINTS

//  let baseUrl = process.env.NEXT_APP_BASEURL;
let baseUrl = "http://localhost:3001";

const users = {
  sendEmailVerification: async (data) => {
    try {
      await fetch(`${baseUrl}/users/emailVerification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
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
      await fetch(`${baseUrl}/users/createMentee`, {
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
