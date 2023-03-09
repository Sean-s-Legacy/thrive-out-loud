import { Router, Request, Response } from "express";

import { createMentee, updateMentee } from "./controller";



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

// create new mentee
router.post('/createMentee', [createMentee]);

// update mentee account
router.post('/updateMentee', [updateMentee]);

export default router;