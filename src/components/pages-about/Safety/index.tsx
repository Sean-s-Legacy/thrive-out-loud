import React from "react";
import { Typography, Divider } from "antd";
import styles from "./Safety.module.css";
import WaveSection from "@/components/WaveSection";
import Image from "next/image";

function index() {
  const { Title, Text } = Typography;
  return (
    <WaveSection
      bgColor="primary2"
      negColorTop="primary0"
      negColorBottom="primary0"
    >
      <div className={styles.sectionContainer}>
        <Title level={2} className="bold textPrimary9 textAlignCenter">
          Platform safety plan
        </Title>
        <div className={styles.contentContainer}>
          <div className={styles.infoContainer}>
            <Image
              src={"/images/about/safety-placeholder.png"}
              height={260}
              width={260}
              alt="placeholder"
            />
            <div className={styles.textContainer}>
              <Title level={2} className="bold textPrimary8">
                Mentor background checks
              </Title>
              <Text className="textLarge">
                All mentors on the platform are verified through background
                checks which cover criminal record, education, and employment
                history.
              </Text>
            </div>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
              <Title level={2} className="bold textPrimary8">
                Mentee verification
              </Title>
              <Text className="textLarge">
                We employ end-to-end encryption through our platform. This means
                your messages and video calls are secure, as messages are harder
                to intercept and read.
              </Text>
            </div>
            <Image
              src={"/images/about/secure.png"}
              height={260}
              width={260}
              alt="placeholder"
            />
          </div>
          <div className={styles.infoContainer}>
            <Image
              src={"/images/about/code.png"}
              height={260}
              width={260}
              alt="placeholder"
            />
            <div className={styles.textContainer}>
              <Title level={2} className="bold textPrimary8">
                Secure communications
              </Title>
              <Text className="textLarge">
                We employ end-to-end encryption through our platform. This means
                your messages and video calls are secure, as messages are harder
                to intercept and read.
              </Text>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
              <Title level={2} className="bold textPrimary8">
                Customizable privacy settings
              </Title>
              <Text className="textLarge">
                Messages and other users can be hidden in our messaging feature.
              </Text>
            </div>
            <Image
              src={"/images/about/laptop.png"}
              height={260}
              width={260}
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </WaveSection>
  );
}

export default index;
