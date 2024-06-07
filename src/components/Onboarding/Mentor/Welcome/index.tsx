import React, { useState, useRef, useEffect } from "react";
import { Typography, Button, Input, Checkbox } from "antd";
import Link from "next/link";
import styles from "./Welcome.module.css";
import Image from "next/image";

export default function Welcome() {
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
        <Paragraph>We&apos;re so excited you&apos;re here!</Paragraph>
        <Paragraph className="bold">
          Just a heads up: Our platform is currently open to mentors who live in
          the United States and are 18 years or older.
        </Paragraph>
        <Paragraph>
          If that&apos;s not you, we hope to expand our program in the future,
          so please check back later.
        </Paragraph>
        <Paragraph>
          Thank you for joining our community!&nbsp;
          <span className="bold">
            We&apos;ll begin by asking you a few questions about your identify
            and background&nbsp;
          </span>
          to personalize your mentorship experience.
        </Paragraph>
        <Checkbox className={styles.checkboxWrapper} onChange={handleCheckbox}>
          I am at least 18 years or older
        </Checkbox>

        <div className={styles.twoButtons}>
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Link href="/mentorQuestionnaire">
            <Button disabled={!isChecked} type="primary">
              Let&apos;s Go
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
