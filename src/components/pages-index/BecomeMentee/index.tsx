import React from "react";
import { Typography, Button } from "antd";
import styles from "./BecomeMentee.module.css";
import Image from "next/image";
import Link from "next/link";

function BecomeMentee() {
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
          <Paragraph className="textLarge mediumWeight textNeutral8">
            Gain confidence, find resources, and achieve your career goals—all
            in a safe, affirming space. Get valuable advice and guidance in 1:1
            video sessions with mentors you choose and trust.
          </Paragraph>
        </div>
        <div className={styles.becomeButton}>
          <Link href="/becomeamentee" passHref>
            <Button type="primary" htmlType="submit" size="large">
              Become a mentee
            </Button>
          </Link>
        </div>
      </div>
      <Image
        alt="Two people looking at the screen smiling in a building hallway"
        src={"/images/index/become-mentee.png"}
        className={styles.sectionImg}
        width={480}
        height={480}
      />
    </section>
  );
}

export default BecomeMentee;
