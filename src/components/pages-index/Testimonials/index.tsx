import React from "react";
import Image from "next/image";
import { Typography, Card, Avatar } from "antd";
import styles from "./Testimonials.module.css";

const { Text, Title } = Typography;

const testimonials = [
  {
    imgSrc: "testimonial-1.png",
    name: "Sawyer",
    role: "Professor",
    testimonialText:
      "'I'm so grateful for the mentorship I received from Jane. She went above and beyond to help me land my dream job. With her guidance, I was able to polish my resume and cover letter, and prepare for the interview process. She even introduced me...'",
  },
  {
    imgSrc: "testimonial-2.png",
    name: "Bailey",
    role: "Product Designer",
    testimonialText:
      "'I'm so grateful for the mentorship I received from Jane. She went above and beyond to help me land my dream job. With her guidance, I was able to polish my resume and cover letter, and prepare for the interview process. She even introduced me...'",
  },
  {
    imgSrc: "testimonial-3.png",
    name: "Jessie",
    role: "College Student",
    testimonialText:
      "'I'm so grateful for the mentorship I received from Jane. She went above and beyond to help me land my dream job. With her guidance, I was able to polish my resume and cover letter, and prepare for the interview process. She even introduced me...'",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.sectionWrapper}>
      <Title level={2} className="bold textPrimary7 textAlignCenter">
        Testimonials
      </Title>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => {
          return (
            <Card
              key={index}
              style={{ width: 370, height: 440 }}
              className={styles.card}
              // bodyStyle={{
              //   display: "flex",
              //   flexDirection: "column",
              //   alignItems: "center",
              //   gap: "22px",
              // }}
            >
              <div className={styles.testimonialCard}>
                <Avatar
                  src={`/images/index/${testimonial.imgSrc}`}
                  size={114}
                />
                <div className={styles.cardContent}>
                  <div className={styles.cardHeadingContainer}>
                    <Title level={3} className="textPrimary8 textAlignCenter">
                      {testimonial.name}
                    </Title>
                    <Text
                      className="mediumWeight textAlignCenter"
                      type="secondary"
                    >
                      {testimonial.role}
                    </Text>
                  </div>
                  <Text className="textAlignCenter">
                    {testimonial.testimonialText}
                  </Text>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
