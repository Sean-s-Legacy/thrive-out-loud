import React from "react";
import { Typography } from "antd";
import styles from "./OurStory.module.css";

function index() {
  const { Title, Paragraph } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <Title level={2} className="bold textPrimary1 textAlignCenter">
          Our story
        </Title>
        <div>
          <Paragraph className="textLarge textPrimary1 regularWeight">
            Sean’s Legacy was founded in 2019, ten years after the passing of
            Sean Myers. Sean was a 13 year old dancer and artistic honors
            student who was bullied for his bisexuality until he could no longer
            bear it. To preserve his legacy, we are working to increase LGBTQIA+
            representation and identity education as a primary prevention method
            to reduce suicide among the LGBTQIA+ population.
          </Paragraph>
          <Paragraph className="textLarge textPrimary1 regularWeight">
            We champion LGBTQIA+ identity education because of the lack of
            resources that weren’t available to Sean when he needed them. This
            is why we provide educational materials for all through our Resource
            Hub, available on our website. We are taking LGBTQIA+ representation
            a step further with our professional mentorship program.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}

export default index;
