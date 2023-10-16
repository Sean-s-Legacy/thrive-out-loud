import { Router, Request, Response } from "express";
import { createMentee, userEndpoints } from "./controller";
import { listUsers, sendVerificationEmail } from './controller';



const router = Router();

router.use((req: Request, res: Response, next: Function) => {
  console.log("* Route : USERS");
  console.log(req.originalUrl)
  next();
})

/*
 * ==============================
 * NEW USER FOR Mentee
 * ==============================
*/

router.get('/',  (req, res) => {
  res.send("user route!");
});

router.post("/emailVerification",[sendVerificationEmail]);

// create new mentee
router.post('/createMentee', [createMentee]);

//to list users
router.get('/users', listUsers);
export default router;


//create user Endpoints
router.get('users', userEndpoints)