import React from "react";
import { Typography, Button } from "antd";
import styles from "./BecomeMentor.module.css";
import Image from "next/image";

function index() {
  const { Title, Paragraph } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          <Title className="bold">Inspire vibrant careers</Title>
        </div>
        <div className={styles.textParagraph}>
          <Paragraph className="textLarge mediumWeight">
            Join our community of experienced LGBTQIA+ mentors. Form meaningful
            connections that uplift your community, and shape a new generation
            of professionals.
          </Paragraph>
        </div>

        <Button type="primary" htmlType="submit" size="large">
          Become a mentor
        </Button>
      </div>
      <Image
        alt="A professional woman stands smiling"
        src={"/images/index/become-mentor.png"}
        className={styles.heroImg}
        width={480}
        height={480}
      />
    </section>
  );
}

export default index;
