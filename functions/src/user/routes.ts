import { Router, Request, Response } from "express";
import { createMentee, generateTwoFactor, verifyOTPCode } from "./controller";
import { isAuthenticated } from "../middlewares/authenticated";
// import { listUsers } from './controller';

const router = Router();

router.use((req: Request, res: Response, next: Function) => {
  console.log("* Route : USERS");
  // console.log(req.originalUrl)
  next();
});

/*
 * ==============================
 * NEW USER FOR Mentee
 * ==============================
 */

// create new mentee
router.post("/createMentee", [createMentee]);

//to list users
// router.get('/users', listUsers);

router.post("/generateTwoFactor", [isAuthenticated, generateTwoFactor]);
router.post("/verifyOTPCode", [isAuthenticated, verifyOTPCode]);
export default router;

//create user Endpoints
// router.get('users', userEndpoints)
