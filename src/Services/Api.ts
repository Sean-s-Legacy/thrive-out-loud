// API BASE AND ENDPOINTS

//  let baseUrl = process.env.NEXT_APP_BASEURL;
let baseUrl = "https://us-central1-seans-legacy.cloudfunctions.net/app";

 const users  = {
    sendEmailVerification: async (data) => {
        try {
          await fetch(`${baseUrl}/user/emailVerification`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(data),
          }).then((response)=>{
            console.log(response)
          }).catch((error)=>{
            console.log(error)
          })
    
        } catch (error) {
          console.error("Error sending email verification:", error);
          throw error;
        }
      },
    saveUserInFirestore:async(data) =>{
      try {
        await fetch(`${baseUrl}/user/createMentee`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(data),
        }).then((response)=>{
          console.log(response)
        }).catch((error)=>{
          console.log(error)
        })
  
      } catch (error) {
        console.error("Error saving user in firestore:", error);
        throw error;
      }
    },
  }

 const apiEndPoint = {
     users,
 }

 export default apiEndPoint;