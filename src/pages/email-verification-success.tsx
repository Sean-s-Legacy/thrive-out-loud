import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/email-verification-success.module.css";

export default function EmailVerificationSuccess() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Half */}
      <div className={styles.leftContainer}>
        <Image
          alt="Email Verified"
          src={"/images/email-verification/email-verified.png"}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "60%",
            height: "auto",
            maxWidth: "505px",
            maxHeight: "410px",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Right Half */}
      <div className={styles.rightContainer}>
        <div className={styles.textContainer}>
          <h1 style={{ fontSize: 38 }}>Your email has been verified</h1>
          <p style={{ color: "#0000008C", fontSize: 20 }}>
            Thank you for helping us make this a safe space for all. Let’s get
            you set up to book your first session!
          </p>
          <Link href="/dashboard" className={styles.buttonContainer}>
            <div className={styles.buttonText}>Get Started</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
