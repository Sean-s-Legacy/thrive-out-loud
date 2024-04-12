import React from "react";
import { Typography } from "antd";
import styles from "./Hero.module.css";

function index() {
  const { Title, Paragraph } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          <Title className="bold textPrimary8">
            Dedicated to helping LGBTQIA+ youth thrive{" "}
          </Title>
        </div>
        <div>
          <Paragraph className="characterPrimaryBlack textLarge mediumWeight">
            Thrive Out Loud is a mentorship program created by Sean&apos;s
            Legacy that connects early-career LGBTQIA+ young adults with
            experienced, like-minded mentors. We created Thrive Out Loud to
            increase LGBTQIA+ representation in workplaces, foster academic and
            career development, and provide a safe space for advice and
            affirmation.{" "}
          </Paragraph>
        </div>
      </div>
    </section>
  );
}

export default index;
