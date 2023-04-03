import React from "react";
import { Typography, Button } from "antd";
import Image from "next/image";
import styles from "@/styles/index2.module.css";

export default function newhomepage() {
  const { Title, Text } = Typography;
  return (
    <>
      <section className={styles.transitionSection}>
        <div className={styles.transitionSectionContainer}>
          <Text className="mediumWeight textLarge textInverse">
            At Sean’s Legacy, we’re dedicated to providing support for LGBTQIA+
            youth in their academic and extracurricular endeavors. Whether
            you’re thinking about going to college, looking for your first job,
            or just need some support and guidance, our online community of
            LGBTQIA+ mentors is here to help.
          </Text>
        </div>
      </section>

      <section className={styles.promotionalSection}>
        <div className={styles.promotionalSectionWrapper}>
          <div>
            <Title level={2} className="bold textAlignCenter textPrimary7">
              Why sign up as a mentee?
            </Title>
          </div>

          <div className={styles.imgWrapper}>
            <Image
              alt="100% free - No subscription is needed and completely ad-free."
              width={368}
              height={320}
              src="/images/index/promotional-1.png"
            />

            <Image
              alt="Focused on you - Find a trusted mentor who fits your interests and career goals.  "
              width={368}
              height={320}
              src="/images/index/promotional-2.png"
            />

            <Image
              alt="Designed for privacy - You have full control over what data you provide. "
              width={368}
              height={320}
              src="/images/index/promotional-3.png"
            />
          </div>
          <div className={styles.btncontainer}>
            <Button size="large" type="primary">
              Learn more{" "}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
