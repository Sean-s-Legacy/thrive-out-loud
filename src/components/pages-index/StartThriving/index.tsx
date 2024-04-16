import React from "react";
import { Typography, Button } from "antd";
import styles from "./StartThriving.module.css";
import Link from "next/link";

function index() {
  const { Title, Paragraph } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          <Title className="bold textPrimary8">Start Thriving</Title>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href="#" passHref>
            <Button type="primary" htmlType="submit" size="large">
              Sign up
            </Button>
          </Link>
        </div>
        <div className={styles.textParagraph}>
          <Title level={3} className="semibold textNeutral8">
            Thrive Out Loud is part of a network of community initiatives led by{" "}
            <Link href="#">
              <span className="semibold underline geekBlue7">
                Sean&apos;s Legacy
              </span>
            </Link>
            .
          </Title>
        </div>
      </div>
    </section>
  );
}

export default index;
