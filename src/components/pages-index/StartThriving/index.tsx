import React from "react";
import { Typography, Button } from "antd";
import styles from "./StartThriving.module.css";
import Link from "next/link";

function StartThriving() {
  const { Title, Paragraph } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          <Title className="bold textPrimary8">Start Thriving</Title>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href="/onboardingSplitter" passHref>
            <Button type="primary" htmlType="submit" size="large">
              Sign up
            </Button>
          </Link>
        </div>
        <div className={styles.textParagraph}>
          <Paragraph className="textLarge textNeutral8">
            Thrive Out Loud is part of a network of community initiatives led by{" "}
            <Link href="#">
              <span className="semibold underline geekBlue7">
                Sean&apos;s Legacy
              </span>
            </Link>
            .
          </Paragraph>
        </div>
      </div>
    </section>
  );
}

export default StartThriving;
