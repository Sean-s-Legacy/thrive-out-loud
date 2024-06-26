import React from "react";
import { Typography, Button } from "antd";
import styles from "./BecomeMentor.module.css";
import Image from "next/image";
import Link from "next/link";

function BecomeMentor() {
  const { Title, Paragraph } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          <Title className="bold">Inspire vibrant careers</Title>
        </div>
        <div className={styles.textParagraph}>
          <Paragraph className="textLarge mediumWeight textNeutral8">
            Join our community of experienced LGBTQIA+ mentors. Form meaningful
            connections that uplift your community, and shape a new generation
            of professionals.
          </Paragraph>
        </div>
        <div className={styles.becomeButton}>
          <Link href="/becomeamentor" passHref>
            <Button type="primary" htmlType="submit" size="large">
              Become a mentor
            </Button>
          </Link>
        </div>
      </div>
      <Image
        alt="A professional woman stands smiling"
        src={"/images/index/become-mentor.png"}
        className={styles.sectionImg}
        width={480}
        height={480}
      />
    </section>
  );
}

export default BecomeMentor;
