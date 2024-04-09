import React from "react";
import { Typography, Button } from "antd";
import styles from "./Hero.module.css";
import Image from "next/image";

function index() {
  const { Title, Paragraph } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          <Title className="bold textPrimary8">
            Bold career paths <br /> powered by LGBTQIA+ mentorship
          </Title>
        </div>
        <div className={styles.textParagraph}>
          <Paragraph className="textLarge mediumWeight">
            We connect LGBTQIA+ young adults at the start of their professional
            journeys with experienced, like-minded mentors.
          </Paragraph>
          <Paragraph className="textLarge mediumWeight">
            We currently serve mentees aged 18-25 who live in the United States.
            {""}
          </Paragraph>
        </div>
        <div className={styles.menteeMentorButtons}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="textPrimary10"
          >
            Become a mentee
          </Button>
          <Button
            type="default"
            htmlType="submit"
            size="large"
            className="textPrimary10"
          >
            Become a mentor
          </Button>
        </div>
      </div>
      <Image
        alt="Four people are lying down, wearing rainbow-colored clothes, smiling, and leaning their heads together"
        src={"/images/index/hero2.png"}
        className={styles.heroImg}
        width={841}
        height={598}
      />
    </section>
  );
}

export default index;
