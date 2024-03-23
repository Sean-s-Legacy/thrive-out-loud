import React from "react";
import { Typography, Button, Space, Spin } from "antd";
import Image from "next/image";

import { useAuth } from "../context/AuthContext";

import styles from "@/styles/index.module.css";

import GettingStarted from "@/components/pages-index/GettingStarted";
import OurMentors from "@/components/pages-index/OurMentors";
import Testimonials from "@/components/pages-index/Testimonials";
import Head from "next/head";

const { Title, Text } = Typography;

export default function Home() {
  const { currentUser, loading } = useAuth();

  console.log("currentUser Index:", currentUser);

  return (
    <div>
      <Head>
        <title>Thrive Out Loud | Receive guidance, discover your path, and meet mentors who truly understand the LGBTQIA+ community!</title>
      </Head>
      <section className={styles.heroSection}>
        <div className={styles.heroSectionContent}>
          <div className={styles.heroSectionHeading}>
            <Title className="bold textPrimary8">
              Sean’s Legacy <br /> Mentorship Program
            </Title>
            <div className={styles.heroSectionHeadingContent}>
              <Text className="mediumWeight textLarge">
                A free, online mentorship program that matches LGBTQIA+ young
                adults with mentors in the queer community.
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
            alt="Woman sitting on a couch in front of her laptop, smiling"
            src={"/images/index/hero.png"}
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

      <GettingStarted />
      <OurMentors />
      <Testimonials />
    </div>
  );
}
