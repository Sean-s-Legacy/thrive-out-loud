import React from "react";
import Image from "next/image";
import { Typography } from "antd";
import styles from "./GettingStarted.module.css";

const { Text, Title } = Typography;

export default function GettingStarted() {
  return (
    <div className={styles.fullpage}>
      <div className={styles.section}>
        <div className={styles.header}>
          <Title level={2} className="bold textPrimary8">
            Awesome! How do I get started?
          </Title>
        </div>
        <div className={styles.container}>
          <div className={styles.direction}>
            <div className={styles.circle}>
              <Title level={3} className="bold textPrimary8">
                1
              </Title>
            </div>
            <Title level={3} className="bold">
              Create an account
            </Title>
            <Text type="secondary" className="mediumWeight textLarge">
              Enter your email and create a password to get set up.
            </Text>
          </div>
          <Image
            src={"/images/index/create-account.png"}
            alt="Girl holding a billboard card"
            width={347}
            height={184}
          />
        </div>
        <div className={styles.container}>
          <Image
            src={"/images/index/get-verified.png"}
            alt="A girl authenticates the card"
            width={224}
            height={261}
          />
          <div className={styles.direction}>
            <div className={styles.circle}>
              <Title level={3} className="bold textPrimary8">
                2
              </Title>
            </div>
            <Title level={3} className="bold">
              Get Verified
            </Title>

            <Text type="secondary" className="mediumWeight textLarge">
              Verify your email address and phone number to confirm your
              identify.
            </Text>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.direction}>
            <div className={styles.circle}>
              <Title level={3} className="bold textPrimary8">
                3
              </Title>
            </div>
            <Title level={3} className="bold">
              Create a profile
            </Title>

            <Text type="secondary" className="mediumWeight textLarge">
              Complete your profile to help potential mentors learn more about
              you.
            </Text>
          </div>
          <Image
            src={"/images/index/create-profile.png"}
            alt="A man creating self profile"
            width={418}
            height={210}
          />
        </div>
        <div className={styles.container}>
          <Image
            src={"/images/index/choose-mentor.png"}
            alt="A man is selecting a mentor"
            width={408}
            height={269}
          />
          <div className={styles.direction}>
            <div className={styles.circle}>
              <Title level={3} className="bold textPrimary8">
                4
              </Title>
            </div>
            <Title level={3} className="bold">
              Choose a mentor
            </Title>
            <Text type="secondary" className="mediumWeight textLarge">
              Take our matching questionnmaire or browse available mentors.
              Request a session through their profile, and once they approve it,
              you&apos;re all set!
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
