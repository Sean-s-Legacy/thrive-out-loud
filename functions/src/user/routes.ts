import { Router, Request, Response } from "express";
import { createMentee,listUsers,sendVerificationEmail, generateTwoFactor, verifyOTPCode } from "./controller";
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


// router.get('/',  (req, res) => {
//   res.send("user route!");
// });


router.post("/emailVerification",[sendVerificationEmail]);

// create new mentee
router.post("/createMentee", [createMentee]);

//to list users
// router.get('/users', listUsers);

router.post("/generateTwoFactor", [isAuthenticated, generateTwoFactor]);
router.post("/verifyOTPCode", [isAuthenticated, verifyOTPCode]);

//create user Endpoints
// router.get('users', userEndpoints)
router.get('/users', listUsers);

//create user Endpoints
// router.get('users', userEndpoints)

export default router;
