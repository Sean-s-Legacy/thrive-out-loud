import { Router, Request, Response } from "express";

import { createMentee } from "./controller";



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




import { listUsers } from './controller';

const router = Router();

router.get('/users', listUsers);

export default router;


