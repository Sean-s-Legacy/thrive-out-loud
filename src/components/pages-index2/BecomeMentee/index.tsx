import React from "react";
import { Typography, Button } from "antd";
import styles from "./BecomeMentee.module.css";
import Image from "next/image";

function index() {
  const { Title, Paragraph } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          <Title className="bold">
            Forge your path
            <br /> with free online mentorship
          </Title>
        </div>
        <div className={styles.textParagraph}>
          <Paragraph className="textLarge mediumWeight">
            Gain confidence, find resources, and achieve your career goals—all
            in a safe, affirming space. Get valuable advice and guidance in 1:1
            video sessions with mentors you choose and trust.
          </Paragraph>
        </div>

        <Button type="primary" htmlType="submit" size="large">
          Become a mentee
        </Button>
      </div>
      <Image
        alt="Two people sitting together holding hands"
        src={"/images/index/become-mentee.png"}
        className={styles.heroImg}
        width={480}
        height={480}
      />
    </section>
  );
}

export default index;
