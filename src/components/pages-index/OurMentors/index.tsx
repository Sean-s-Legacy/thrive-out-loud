import React from "react";
import Image from "next/image";
import { Typography } from "antd";
import styles from "./OurMentors.module.css";
import WaveSection from "@/components/WaveSection";

const { Text, Title } = Typography;

export default function OurMentors() {
  return (
    <WaveSection
      bgColor="volcano1"
      negColorTop="primary0"
      negColorBottom="primary0"
    >
      <div className={styles.sectionWrapper}>
        <div className={styles.headingContainer}>
          <Title level={2} className="semibold textAlignCenter">
            Our mentors
          </Title>
          <Text className="textLarge textAlignCenter">
            Our mentors are all verified through background checks by
            Sean&apos;s Legacy. Our mentors are LGBTQIA+ or LGBTQIA+ friendly,
            and they all come from different walks of life and identities to
            ensure a safe and inclusive connection.
          </Text>
        </div>
        {/* Image will need approprite alt tag to convey info on "speech bubbles" */}
        <Image
          src={"/images/index/OurMentors.png"}
          alt="#"
          width={1115}
          height={819}
        />
      </div>
    </WaveSection>
  );
}
