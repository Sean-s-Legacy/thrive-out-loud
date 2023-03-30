import React from "react";
import styles from "./OurMentors.module.css";
import { Typography, Button, Space, Image } from "antd";

const { Title, Paragraph, Text, Link } = Typography;
export default function OurMentors() {
  return (
    <div className={styles.ourMentors}>
      <div className="space-7 vertical">
        <Title level={2} className="semibold textAlignCenter">
          Our mentors
        </Title>
        <Text className="textLarge textAlignCenter">
          Our mentors are all verified through background checks by Sean's
          Legacy. <br /> Our mentors are LGBTQIA+ or LGBTQIA+ friendly, and they
          all come from different <br /> walks of life and identities to ensure
          a safe and inclusive connection.
        </Text>
        <div style={{ paddingTop: "70px" }} className="textAlignCenter">
          <div className={styles.ourMentorsContents}>
            <div className={styles.ourMentorsNote1}>
              <img className={styles.arrow1} src="/images/Vector4.png" alt="" />
              <Text className="mediumWeight textInverse">
                Find a great mentor match if you have multiple commonalities
              </Text>
            </div>
            <div className={styles.ourMentorsNote2}>
              <img className={styles.arrow2} src="/images/Line72.png" alt="" />
              <Text className="mediumWeight textInverse">
                Focus areas tell you what this mentor can help you with
              </Text>
            </div>
            <div className={styles.ourMentorsNote3}>
              <img className={styles.arrow3} src="/images/Line79.png" alt="" />
              <img
                className={styles.vector5}
                src="/images/Vector5.png"
                alt=""
              />
              <Text className="mediumWeight textInverse">
                Focus areas tell you what this mentor can help you with
              </Text>
            </div>
            <div className={styles.ourMentorsNote4}>
              <img className={styles.arrow4} src="/images/Line70.png" alt="" />
              <Text className="mediumWeight textInverse">Demographics</Text>
            </div>
            <div className={styles.ourMentorsNote5}>
              <img
                className={styles.arrow5}
                src="/images/Line72(1).png"
                alt=""
              />
              <Text className="mediumWeight textInverse">
                Connect on linkedIn, and/or checkout their website
              </Text>
            </div>
            <div className={styles.ourMentorsNote6}>
              <img
                className={styles.arrow6}
                src="/images/Line70(1).png"
                alt=""
              />
              <Text className="mediumWeight textInverse">
                Book easily with Calendly
              </Text>
            </div>
            <div className={styles.ourMentorsNote7}>
              <img className={styles.arrow6} src="/images/Vector6.png" alt="" />
              <img
                className={styles.vector6}
                src="/images/Vector5(1).png"
                alt=""
              />
              <Text className="mediumWeight textInverse">Interests</Text>
            </div>
            <Image width={600} src="/images/mentor-profile-5.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
