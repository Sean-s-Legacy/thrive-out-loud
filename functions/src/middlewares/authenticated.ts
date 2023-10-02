import { Request, Response } from "express";
import * as admin from "firebase-admin";
import { UNAUTHORISED_ERROR_CODE, UNAUTHORISED_MSG } from "../utils/constants";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: Function
) => {
  console.log("******* isAuthenticated *******");

 

  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(UNAUTHORISED_ERROR_CODE)
      .send({ message: UNAUTHORISED_MSG });
  }

  if (!authorization.startsWith("Bearer")) {
    console.error("No Firebase ID token was passed as a Bearer token");
    return res
      .status(UNAUTHORISED_ERROR_CODE)
      .send({ message: UNAUTHORISED_MSG });
  }

  const split = authorization.split("Bearer ");
  if (split.length !== 2) {
    return res
      .status(UNAUTHORISED_ERROR_CODE)
      .send({ message: UNAUTHORISED_MSG });
  }

  const idToken = split[1];
  try {
    const decodedToken: admin.auth.DecodedIdToken = await admin
      .auth()
      .verifyIdToken(idToken);

    res.locals = {
      ...res.locals,
      uid: decodedToken.uid,
      email: decodedToken.email,
    };
    console.log(JSON.stringify(res.locals));

    console.log("Authenticated !");
    return next();
  } catch (err: any) {
    console.error(`${err.code} -  ${err.message}`);
    return res
      .status(UNAUTHORISED_ERROR_CODE)
      .send({ message: UNAUTHORISED_MSG });
  }
};
