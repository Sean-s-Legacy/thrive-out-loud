import { MenteeSignUpPayLoad } from "./structs";
import * as admin from "firebase-admin";
import { Request, Response } from "express";
import { AppError, AppSuccess } from "../utils/response";
import * as constants from "../utils/constants";
import * as service from "./service";
//import * as functions from 'firebase-functions';
//import message from "antd/lib/message";
//import { error } from "firebase-functions/logger";
import { COLLECTION } from "../utils/firestore";
import { userError } from "./error";
import CustomError from "../utils/customError";
// import * as https from 'https';

// import * as https from "https";

import { BREVO_API_KEY } from "../config";
// import { brevoApiKey } from "../../brevo-config";

// // brevo
// const brevo = require("@getbrevo/brevo");

// // Initialize the Brevo API client
// let defaultClient = brevo.ApiClient.instance;
// let apiKey = defaultClient.authentications["api-key"];
// apiKey.apiKey = brevoApiKey;

// use the functions variable here

// import * as dbService from "./dbService"

/* Private Functions */

const handleError = async (res: Response, err: any) => {
  const err_response: AppError = {
    status: constants.ERROR_MSG,
    code: constants.SERVER_ERROR_CODE,
    message: constants.SERVER_ERROR_MSG,
    data: null,
    name: constants.APP_ERROR,
  };
  console.error("USER : ERROR ERROR ERROR !!");
  console.error("USER : ERROR ERROR ERROR !!");
  console.error("USER : ERROR ERROR ERROR !!");

  // console.log(err)

  if (err.code) {
    err_response.code = err.code;
  }
  if (err.message) {
    err_response.message = err.message;
  }
  if (err.data) {
    err_response.data = err.data;
  }
  if (err.name) {
    err_response.name = err.name;
  }

  // console.error("USER : ERROR ERROR ERROR !!");
  // console.error(err_response);

  return res
    .status(
      err_response.code &&
        constants.HTTP_STATUS_CODES.includes(err_response.code)
        ? err_response.code
        : constants.SERVER_ERROR_CODE
    )
    .json(err_response);
};

// @ts-ignore
export const createMentee = async (req: Request, res: Response) => {
  console.log("+++++++++++++++++++ create Mentee +++++++++++++++++++");

  try {
    // @ts-ignore
    const payload: Partial <MenteeSignUpPayLoad> = req.body;
    const result = await service.createMenteeAccount(payload);

    // console.log(userResponse)

    // Insert data to firestore collection
    // await dbService.createMenteeAccount(payload, firebaseUserData)

    const success_response: AppSuccess = {
      status: constants.SUCCESS_MSG,
      code: constants.CREATE_SUCCESS_CODE,
      data: result,
    };

    return res.status(constants.CREATE_SUCCESS_CODE).json(success_response);
  } catch (error) {
    console.log();
    return handleError(res, error);
  }
};

export const createAccount = async (req: Request, res: Response) => {
  console.log("+++++++++++++++++++ create Account in controller +++++++++++++++++++");
  console.log(req.body)
  try {
    const payload: Partial <MenteeSignUpPayLoad> = req.body;
    const result = await service.createAccount(payload);

    const success_response: AppSuccess = {
      status: constants.SUCCESS_MSG,
      code: constants.CREATE_SUCCESS_CODE,
      data: result,
    };

    return res.status(constants.CREATE_SUCCESS_CODE).json(success_response);
  } catch (error) {
    console.log();
    return handleError(res, error);
  }
};

//list all user controller endpoints
export const listUsers = async (_req: Request, res: Response) => {
  try {
    await admin.firestore().collection(COLLECTION.USERS).get();
    //const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //         res.status(200).json(users);
    // };

    //     try {error: (_unknown: any) =>
    //     console.error(error);
    //     res.status(500).json({ success: false, error,message });
    //   }
    // console.log(snapshot)
  } catch {
    //

    (error: any) => {
      // console.log(error)
      return handleError(res, error);
    };
  }
};

// export const userEndpoints = async (req: Request, res: Response) => {
//   console.log("+++++++++++++++++++ create userEndpoints +++++++++++++++++++");

//     try {error: (_unknown: any) =>
//     console.error(error);
//     res.status(500).json({ success: false, error,message });
//   }
//     console.log(snapshot);
//   } catch {
//     (error: any) => {
//       console.log(error);
//       return handleError(res, error);
//     };
//   }
// };

// https.get("https://seans-legacy.firebaseio.com", (response) => {
//   console.log(response);
// });

// export const userEndpoints = async (req: Request, res: Response) => {
//   console.log("+++++++++++++++++++ create userEndpoints +++++++++++++++++++");

//   try {
//     // @ts-ignore
//     const payload: userEndpointsSignUpPayLoad = req.body;
//     const result = await service.createuserEndpointsAccount(payload);

//     console.log(Response);

//     // Insert data to firestore collection
//     // await dbService.createMenteeAccount(payload, firebaseUserData)

//     const success_response: AppSuccess = {
//       status: constants.SUCCESS_MSG,
//       code: constants.CREATE_SUCCESS_CODE,
//       data: result,
//     };

//     return res.status(constants.CREATE_SUCCESS_CODE).json(success_response);
//   } catch (error) {
//     console.log();
//     return handleError(res, error);
//   }
// };

export const sendVerificationEmail = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    // const payload: userEndpointsSignUpPayLoad = req.body;
    // const result = await service.createuserEndpointsAccount(payload);

    // console.log(Response);

    // Insert data to firestore collection
    // await dbService.createMenteeAccount(payload, firebaseUserData)

    console.log("BREVO_API_KEY :>> ", BREVO_API_KEY);
    // Extract data from the request body
    const payload: any = req.body;

    const result = await service.sendBrevoEmailVerification(payload);
    const success_response: AppSuccess = {
      status: constants.SUCCESS_MSG,
      code: constants.CREATE_SUCCESS_CODE,
      data: result,
    };

    return res.status(constants.CREATE_SUCCESS_CODE).json(success_response);
  } catch (error) {
    console.log();
  }
};

export const generateTwoFactor = async (req: Request, res: Response) => {
  console.log("+++++++++++++++++++ generate two factor +++++++++++++++++++");

  try {
    //check user id
    const { uid } = res.locals;
    if (!uid) {
      throw new CustomError(userError.auth.loginerror);
    }
    console.log("UID:::::::::::::::", uid);
    //get user info from firebase authentication

    const payload: any = req.body;

    const result = await service.sendVerificationCode(payload);

    const success_response: AppSuccess = {
      status: constants.SUCCESS_MSG,
      code: constants.CREATE_SUCCESS_CODE,
      data: result,
    };

    return res.status(constants.CREATE_SUCCESS_CODE).json(success_response);
  } catch (error) {
    console.log();
  }
};

export const verifyOTPCode = async (req: Request, res: Response) => {
  console.log("+++++++++++++++++++ verify OPT code +++++++++++++++++++");

  try {
    //check user id
    const { uid } = res.locals;
    if (!uid) {
      throw new CustomError(userError.auth.loginerror);
    }

    const payload: any = req.body;

    const result = await service.verifyOTPCode(payload);

    const success_response: AppSuccess = {
      status: constants.SUCCESS_MSG,
      code: constants.CREATE_SUCCESS_CODE,
      data: result,
    };

    return res.status(constants.CREATE_SUCCESS_CODE).json(success_response);
  } catch (error) {
    return handleError(res, error);
  }
};
