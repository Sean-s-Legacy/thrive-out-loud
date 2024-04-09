import React from "react";
import { Typography, Button, Space, Spin } from "antd";
import Image from "next/image";

import { useAuth } from "../context/AuthContext";

import styles from "@/styles/index.module.css";

import GettingStarted from "@/components/pages-index3/GettingStarted";
import Testimonials from "@/components/pages-index3/Testimonials";

const { Title, Text } = Typography;

export default function Home() {
  const { currentUser, loading } = useAuth();

  console.log("currentUser Index:", currentUser);

  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles.heroSectionContent}>
          <div className={styles.heroSectionHeading}>
            <Title className="bold textPrimary8">
              Sean’s Legacy <br /> Mentorship Program
            </Title>
            <div className={styles.heroSectionHeadingContent}>
              <Text className="mediumWeight textLarge">
                A free, online mentorship program that matches LGBTQIA+ young
                adults with mentors in the queer community. Join us to support young adults in their academic and career journeys.
              </Text>

              <Space wrap>
                <Button type="primary" size="large">
                  Sign up
                </Button>
                <Button size="large">Learn more</Button>
              </Space>
            </div>
          </div>
          <Image
            alt="Four people sitting at a table working on laptops and tablets, Smiling"
            src={"/images/index/hero3.svg"}
            className={styles.heroImg}
            width={858}
            height={715}
            // fill
          />
        </div>
      </section>
      <section className={styles.transitionSection}>
        <div className={styles.transitionSectionContainer}>
          <Text className="mediumWeight textLarge textInverse">
          At Sean’s Legacy, we’re dedicated to providing support for 
          LGBTQIA+ youth in their academic and extracurricular endeavors. 
          Become a mentor and help LGBTQIA+ youth in their professional lives. We'll provide resources to help you mentor the next generation.
          </Text>
        </div>
      </section>

      <section className={styles.promotionalSection}>
        <div className={styles.promotionalSectionWrapper}>
          <div>
            <Title level={2} className="bold textAlignCenter textPrimary7">
              Why sign up as a mentor?
            </Title>
          </div>

          <div className={styles.imgWrapper}>
            <Image
              alt="100% free - No subscription is needed and completely ad-free."
              width={368}
              height={320}
              src="/images/index/promotional-4.png"
            />

            <Image
              alt="Focused on you - Find a trusted mentor who fits your interests and career goals.  "
              width={368}
              height={320}
              src="/images/index/promotional-5.png"
            />

            <Image
              alt="Designed for privacy - You have full control over what data you provide. "
              width={368}
              height={320}
              src="/images/index/promotional-6.png"
            />
          </div>
          <div className={styles.btncontainer}>
            <Button size="large" type="primary">
              Learn more{" "}
            </Button>
          </div>
        </div>
      </section>

      <GettingStarted />
      <Testimonials />
    </div>
  );
}
