import React, { useEffect } from "react";
import Image from "next/image";

import sendVerificationEmail from "@/utils/sendVerificationEmail";

import { useAuth } from "../context/AuthContext";

export default function EmailVerification() {
  const { currentUser } = useAuth();

  useEffect(() => {
    sendVerificationEmail(currentUser.email);
  }, []);

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
            We've sent an email to <strong>{currentUser.email}</strong>
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
              onClick={() => sendVerificationEmail(currentUser.email)}
            >
              Resend email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
