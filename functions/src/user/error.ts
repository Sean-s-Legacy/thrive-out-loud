export const userError = {
    auth: {
      openautherror: {
        name: "Forbidden Error",
        code: 10100,
        message: "Forbidden"
      },
      loginerror: {
        name: "User Login Error",
        code: 10101,
        message: "User is not logged in. Please login to get the details."
      },
      missingsignupdata: {
        name: "User Signup Error",
        code: 10102,
        message: "Error while signing up. Required fields missing"
      },
    
      signupfirebaseerror: {
        name: "User Signup Error",
        code: 10104,
        message: "Error while creating user"
      },
    
    },
    validation: {
      missingfield: {
        name: "User Validation Error",
        code: 10110,
        message: "Required data missing"
      },
 
      emailexists: {
        name: "User Validation Error",
        code: 10114,
        message: "The user with the provided E-mail address already exists"
      },
    },
    db: {
      missingData: {
        name: "User Error",
        code: 10201,
        message: "No data found"
      },
    
    },
  
  }