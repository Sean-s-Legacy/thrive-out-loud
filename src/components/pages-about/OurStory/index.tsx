import React from "react";
import { Typography } from "antd";
import Image from "next/image";
import styles from "./OurStory.module.css";

function index() {
  const { Title, Paragraph, Link } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.storyContainer}>
        <div className={styles.imageContainer}>
          <Image
            alt="Sean's legacy logo"
            width={309}
            height={262}
            src="/images/about/sl-logo.png"
          />
        </div>
        <div className={styles.textContainer}>
          <Title level={2} className="textLarge bold">
            The Sean&apos;s Legacy story
          </Title>

          <Paragraph
            style={{ marginTop: "20px" }}
            className="textMedium mediumWeight"
          >
            Founded in 2019, Sean&apos;s Legacy is focused on increasing
            LGBTQIA+ representation and identity education as a primary
            prevention method to reduce suicide among the LGBTQIA+ population.
          </Paragraph>
          <Paragraph className="textMedium mediumWeight">
            Sean was a 13-year-old dancer and artistic honors student who was
            bullied for his bisexuality until he could no longer bear it. At
            Sean&apos;s Legacy, we champion LGBTQIA+ identity education because
            these resources weren&apos;t available to Sean when he needed them.
          </Paragraph>
          <Link
            underline
            href=""
            className="textMedium characterGeekBlue7 bold"
          >
            Lean more about Sean&apos;s Legacy
          </Link>
        </div>
      </div>
    </section>
  );
}

export default index;
