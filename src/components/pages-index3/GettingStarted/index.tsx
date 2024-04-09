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
              Complete a background check
            </Title>
            <Text type="secondary" className="mediumWeight textLarge">
              Pass a background check to ensure a safe platform.
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
              Complete your profile
            </Title>

            <Text type="secondary" className="mediumWeight textLarge">
            Complete a mentor profile to share your experiences 
            with future mentees.
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
              Match with mentees
            </Title>

            <Text type="secondary" className="mediumWeight textLarge">
              Mentees will request to book your time. We aim to match 
              based on shared experiences and goals.
            </Text>
          </div>
          <Image
            src={"/images/index/create-profile.png"}
            alt="A man creating self profile"
            width={418}
            height={210}
          />
        </div>

      </div>
    </div>
  );
}
