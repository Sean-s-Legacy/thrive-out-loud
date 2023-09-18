import { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "firebase-admin/auth";

import { sendVerificationEmail } from "../../utils/brevoEmail";
const ejs = require("ejs");
const admin = require("../../Firebase/admin");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userEmail, redirectUrl } = req.body;
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!userEmail?.match(emailValidate)) {
      return res.status(401).json({ message: "Invalid email" });
    } else if (!redirectUrl || typeof redirectUrl !== "string") {
      return res.status(401).json({ message: "Invalid redirectUrl" });
    }

    const actionCodeSettings = {
      url: redirectUrl,
    };

    try {
      const actionLink = await getAuth().generateEmailVerificationLink(
        userEmail,
        actionCodeSettings
      );

      const template = await ejs.renderFile("public/verify-email.ejs", {
        actionLink,
        randomNumber: Math.random(),
      });

      await sendVerificationEmail(userEmail, template, actionLink);

      res.status(200).json({ message: "Email successfully sent", actionLink });
    } catch (error) {
      const message = error.message;
      if (error.code === "auth/user-not-found") {
        return res.status(404).json({ message });
      }
      if (error.code === "auth/invalid-continue-uri") {
        return res.status(401).json({ message });
      }
      res.status(500).json({ message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
