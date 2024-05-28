import React, { useState, useRef, useEffect } from "react";
import { Typography, Button, Input, Checkbox } from "antd";
import Link from "next/link";
import styles from "./Splitter.module.css";
import Image from "next/image";

export default function Splitter() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const { Title, Paragraph } = Typography;
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <Title className="bold">Welcome to Thrive Out Loud&nbsp;</Title>
          <Image
            alt="shining star"
            src={"images/onboarding/star-icon.svg"}
            width={36}
            height={36}
          />
        </div>
        <Paragraph>
          We&apos;re so excited you&apos;re here!&nbsp;
          <span className="bold">
            We&apos;ll begin by asking you a few questions about your background
            and identities
          </span>{" "}
          so we can connect you with the right people.
        </Paragraph>
        <Paragraph className="bold">
          Just a heads up: Our platform is currently open to folks who live in
          the United States. Mentees must be between the ages of 18 to 25.
          Mentors must be 18 or older and have at least five years of work
          experience.
        </Paragraph>
        <Paragraph>
          If that&apos;s not you, we hope to expand our program in the future,
          so please check back later.
        </Paragraph>

        <Checkbox className={styles.checkboxWrapper} onChange={handleCheckbox}>
          I am at least 18 years or older
        </Checkbox>

        <div className={styles.twoButtons}>
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <div>
            <Link href="/menteeQuestionnaire">
              <Button
                disabled={!isChecked}
                type="primary"
                className={styles.selectionButton}
              >
                Become a mentee
              </Button>
            </Link>
            <Link href="/mentorQuestionnaire">
              <Button disabled={!isChecked} type="primary">
                Become a mentor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
