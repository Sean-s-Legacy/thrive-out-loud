import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/how-to-book.module.css";

export default function HowToBook() {

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Half */}
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>  How to book a mentor </h1>

        {/* Step Container 1*/}
        <div style={{ width: "80%", maxWidth: 500 }}>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <div className={styles.number}> 1 </div>
            <p style={{ fontSize: 18, fontWeight: 500, padding: 0, margin: 0 }}>
              Create a profile
            </p>
          </div>

          <div className={styles.imageContainer}>
            <Image
              alt="Email Verified"
              src={"/images/bookMentor/bookMentorStep1.png"}
              width={0}
              height={0}
              sizes="100vw"
              className={styles.image}
            />
            <div className={styles.description}>Complete your profile to help mentors learn more about you.</div>
          </div>

        </div>
        {/* Step Container 2*/}
        <div style={{ width: "80%", maxWidth: 500 }}>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <div className={styles.number}> 2 </div>
            <p style={{ fontSize: 18, fontWeight: 500, padding: 0, margin: 0 }}>
              Create a profile
            </p>
          </div>

          <div className={styles.imageContainer}>
            <Image
              alt="Email Verified"
              src={"/images/bookMentor/bookMentorStep2.png"}
              width={0}
              height={0}
              sizes="100vw"
              className={styles.image}
            />
            <div className={styles.description}>Match with a mentor by taking our questionnaire or browsing available mentors. </div>
          </div>

        </div>
        {/* Step Container 3*/}
        <div style={{ width: "80%", maxWidth: 500 }}>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <div className={styles.number}> 3 </div>
            <p style={{ fontSize: 18, fontWeight: 500, padding: 0, margin: 0 }}>
              Create a profile
            </p>
          </div>

          <div className={styles.imageContainer} style={{ marginBottom: 100 }}>
            <Image
              alt="Email Verified"
              src={"/images/bookMentor/bookMentorStep3.png"}
              width={0}
              height={0}
              sizes="100vw"
              className={styles.image}
            />
            <div className={styles.description}>Request a session through their profile calendar and you’re set!</div>
          </div>

        </div>

      </div>


      {/* Right Half */}
      <div className={styles.rightContainer}>
        <div style={{ flex: 1 }}></div>
        <div className={styles.buttonContainer}>
          <Link href="/minimumInfo" className={styles.button}>
            <div className={styles.buttonText}>Continue</div>
          </Link>
        </div>

      </div>
    </div>
  );
}
