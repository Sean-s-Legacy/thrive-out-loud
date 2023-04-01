import React, { useEffect, useState } from "react";
import { Typography, Button, Space, Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

import { useAuth } from "../context/AuthContext";

import styles from "@/styles/index.module.css";

import Mentors from "../components/Mentors/index";
import GettingStarted from "@/components/GettingStarted";
import ImageSlider from "../components/ImageSlider/index";
import WaveSection from "@/components/WaveSection";

const { Title, Text } = Typography;

export default function Home() {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  console.log("currentUser Index:", currentUser);

  if (currentUser) {
    router.push("/dashboard");
    return (
      <div className="spinner-">
        <Spin spinning={loading} />
      </div>
    );
  }

  return (
          <div>
            <section className={styles.heroSection}>
              <Image
                alt="Woman sitting on a couch in front of her laptop, smiling"
                src={"/images/index/hero.png"}
                className={styles.heroImg}
                width={850}
                height={778}
                // fill
              />
              <div className={styles.heroSectionHeading}>
                <Title className="bold textPrimary8">
                  Sean’s Legacy <br /> Mentorship Program
                </Title>
                <div className="space-5 vertical">
                  <Text className="mediumWeight textLarge">
                    Wherever you are on your journey,
                    <br />a mentor can help you take the next step.
                  </Text>

                  <Space wrap>
                    <Button type="primary" size="large">
                      Sign up
                    </Button>
                    <Button size="large">Learn more</Button>
                  </Space>
                </div>
              </div>
            </section>
            <section className={styles.transitionSection}>
              <div className={styles.transitionSectionContainer}>
                <Text className="mediumWeight textLarge textInverse">
                  At Sean’s Legacy, we’re dedicated to providing support for
                  LGBTQIA+ youth in their academic and extracurricular
                  endeavors. Whether you’re thinking about going to college,
                  looking for your first job, or just need some support and
                  guidance, our online community of LGBTQIA+ mentors is here to
                  help.
                </Text>
              </div>
            </section>

            <section className={styles.promotionalSection}>
              <div className={styles.promotionalSectionWrapper}>
                <div>
                  <Title
                    level={2}
                    className="bold textAlignCenter textPrimary7"
                  >
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
     
            <WaveSection>
              <Title className="textAlignCenter" level={2}>
                Testimonials
              </Title>
              <ImageSlider />
            </WaveSection>
          </div>
        </div>
      </section>
    </div>
  );
}
