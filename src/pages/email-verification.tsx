import React, { useEffect, useMemo } from "react";
import Image from "next/image";

// import sendVerificationEmail from "@/utils/sendVerificationEmail";

import { useAuth } from "../context/AuthContext";

import apiEndPoint from "../Services/Api"

export default function EmailVerification() {
  const { currentUser } = useAuth();
  const data = {
    "userEmail": currentUser?.email ?? ""
  }

  useEffect(() => {
    if(currentUser && currentUser.email){
      // sendVerificationEmail(currentUser.email);
      apiEndPoint.users.sendEmailVerification(data)
    }
  }, []);

  const emailString = useMemo(() => {
    if (currentUser && currentUser.email) {
      return `We've sent an email to ${currentUser.email}`;
    }
    // Handle the case where currentUser or currentUser.email is undefined
    return "";
  }, [currentUser]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Half */}
      <div
        style={{
          flex: 1,
          backgroundSize: "cover",
          backgroundColor: "#F2EEF3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          alt="Plane"
          src={"/images/email-verification/plane.png"}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "80%",
            height: "auto",
            maxWidth: "505px",
            maxHeight: "410px",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Right Half */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 50,
        }}
      >
        <div>
          <h1>Verify your email</h1>
          <p>
            {emailString}
          </p>
          <p>Click the link in the email to finish signing up. </p>
          <p>Please check your spam if you don't see it.</p>
          <div
            style={{ marginTop: 48, display: "flex", gap: 5, flexWrap: "wrap" }}
          >
            <p>Can't find it?</p>
            <p
              style={{
                fontWeight: "bold",
                color: "#8145B5",
                cursor: "pointer",
              }}
              onClick={() => apiEndPoint.users.sendEmailVerification(data)}
            >
              Resend email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
