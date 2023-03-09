import {MenteeSignUpPayLoad, MenteeUpdatePayload } from "./structs";
// import * as admin from "firebase-admin";
import { Request, Response } from "express";
import { AppError, AppSuccess } from "../utils/response";
import * as constants from "../utils/constants";
import * as service from "./service"

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
  
    return res.status(
      err_response.code && constants.HTTP_STATUS_CODES.includes(err_response.code)
        ? err_response.code
        : constants.SERVER_ERROR_CODE
    ).json(err_response);
    };

// @ts-ignore
export const createMentee = async (req: Request, res: Response) => {
    console.log(
        "+++++++++++++++++++ create Mentee +++++++++++++++++++"
    );

    try {

        // @ts-ignore
        const payload: MenteeSignUpPayLoad = req.body;
        const result = await service.createMenteeAccount(payload)

        // console.log(userResponse)

        // Insert data to firestore collection
        // await dbService.createMenteeAccount(payload, firebaseUserData)

        const success_response: AppSuccess = {
            status: constants.SUCCESS_MSG,
            code: constants.CREATE_SUCCESS_CODE,
            data: result,
        };

        return res.status(constants.CREATE_SUCCESS_CODE).json(success_response);

    } 
    catch (error) {
        // console.log(error)
        return handleError(res, error);
        
    }
  
}

export const updateMentee = async (req: Request, res: Response) => {
    console.log(
        "+++++++++++++++++++ update Mentee +++++++++++++++++++"
    );

    try {
      const payload: MenteeUpdatePayload = req.body;
      const result = await service.updateMenteeAccount(payload)

      const success_response: AppSuccess = {
        status: constants.SUCCESS_MSG,
        code: constants.CREATE_SUCCESS_CODE,
        data: result,
      };

      return res.status(constants.CREATE_SUCCESS_CODE).json(success_response);
    }
    catch (error) {
      return handleError(res, error);
    }
}