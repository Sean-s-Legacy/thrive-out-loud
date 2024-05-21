import React, { useState, useRef, useEffect } from "react";
import { Typography, Button, Input, Checkbox } from "antd";
import Link from "next/link";
import styles from "./Welcome.module.css";
import Image from "next/image";

export default function Welcome() {
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
          Just a heads up: Our platform is currently open to mentees who live in
          the United States and are between 18 to 25 years old.
        </Paragraph>
        <Paragraph>
          If that&apos;s not you, we hope to expand our program in the future,
          so please check back later.
        </Paragraph>
        <Paragraph>
          Thank you for joining our community!&nbsp;
          <span className="bold">
            Let&apos;s kickstart your mentorship journey by getting to know
            you&nbsp;
          </span>
          so we can match you with the right mentors.
        </Paragraph>
        <Checkbox className={styles.checkboxWrapper}>
          I am at least 18 years or older
        </Checkbox>

        <div className={styles.twoButtons}>
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Link href="/menteeQuestionnaire">
            <Button type="primary">Let&apos;s Go</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
