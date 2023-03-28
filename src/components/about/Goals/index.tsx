import React from "react";
import Image from "next/image";
import { Typography } from "antd";
import styles from "./Goals.module.css";

function index() {
  const { Title, Text } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <Title level={2} className="bold textPrimary7 textAlignCenter">
          Program goals
        </Title>
        <div className={styles.goalsWrapper}>
          <div className={styles.goalsContainer}>
            <Image
              src={"/images/about/goals-1.png"}
              width={290}
              height={214}
              alt="Illustartion of a videochat screen"
            />
            <div className={styles.textContainer}>
              <Title level={3} className="bold textAlignCenter">
                1-to-1 mentoring
              </Title>
              <Text className="textLarge mediumWeight textAlignCenter">
                Uplifting and trusted role models matched personally to you.
              </Text>
            </div>
          </div>
          <div className={styles.goalsContainer}>
            <Image
              src={"/images/about/goals-2.png"}
              width={225}
              height={214}
              alt="Illustartion of three people connected through a network"
            />
            <div className={styles.textContainer}>
              <Title level={3} className="bold textAlignCenter">
                Professional support
              </Title>
              <Text className="textLarge mediumWeight textAlignCenter">
                Work through life’s various challenges with long-lasting
                mentorship.
              </Text>
            </div>
          </div>
          <div className={styles.goalsContainer}>
            <Image
              src={"/images/about/goals-3.png"}
              width={246}
              height={214}
              alt="Illustartion of a a webpage with a security mark"
            />
            <div className={styles.textContainer}>
              <Title level={3} className="bold textAlignCenter">
                A safe space online
              </Title>
              <Text className="textLarge mediumWeight textAlignCenter">
                Your privacy and safety always come first.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
