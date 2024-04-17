import React from "react";
import { Typography, Button } from "antd";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const { Title, Paragraph } = Typography;

  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          {/* Need to set correct line-height on this */}
          <Title className="bold textPrimary8">
            Bold career paths powered by LGBTQIA+ mentorship
          </Title>
        </div>
        <div className={styles.textParagraph}>
          <Paragraph className="textLarge mediumWeight semibold ">
            We connect LGBTQIA+ young adults at the start of their professional
            journeys with experienced, like-minded mentors.
          </Paragraph>
          <Paragraph className="textLarge mediumWeight">
            We currently serve mentees aged 18-25 who live in the United States.
            {""}
          </Paragraph>
        </div>
        <div className={styles.menteeMentorButtons}>
          <Link href="/becomeamentee" passHref>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="textPrimary10"
            >
              Become a mentee
            </Button>
          </Link>
          <Link href="/becomeamentor" passHref>
            <Button
              type="default"
              htmlType="submit"
              size="large"
              className="textPrimary10"
            >
              Become a mentor
            </Button>
          </Link>
        </div>
      </div>
      <Image
        alt="Four people are lying down, wearing rainbow-colored clothes, smiling, and leaning their heads together"
        src={"/images/index/hero2.png"}
        className={styles.heroImg}
        width={911}
        height={598}
      />
    </section>
  );
}

export default Hero;
