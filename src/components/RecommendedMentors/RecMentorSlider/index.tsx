import { Typography } from "antd";
import React, { useState, useRef, useEffect } from "react";
import RecommendedMentorCard from "../RecMentorCard";
import styles from "./RecMentorSlider.module.css";
import {
  InfoCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

export default function RecommendedMentorSlider() {
  const { Title } = Typography;
  const imgRef = useRef<HTMLDivElement>();

  const mentors = [
    {
      name: "Olivia Rhye",
      imgSrc: "/images/mentor-1.png",
      pronouns: "(she/hers)",
      jobTitle: "Math Teacher at LA Unified School Disctrict",
      fieldOfExpertise: ["math", "education"],
      supportOffered: ["career after hs", "early career"],
    },
    {
      name: "Drew Cano",
      imgSrc: "/images/mentor-2.png",
      pronouns: "(he/him)",
      jobTitle: "Customer Success Manager at MetaFactor",
      fieldOfExpertise: ["coaching", "management"],
      supportOffered: ["queer prof. advice", "career direction"],
      tag: "Available now",
    },
    {
      name: "Henry Potter",
      imgSrc: "/images/mentor-3.png",
      pronouns: "(he/they)",
      jobTitle: "Data Science Lead at Elementor",
      fieldOfExpertise: ["stat analysis", "machine learning", "data..."],
      supportOffered: ["career direction", "early career", "resume..."],
      tag: "Available now",
    },
    {
      name: "Natali Craig",
      imgSrc: "/images/mentor-4.png",
      pronouns: "(she/hers)",
      jobTitle: "Manufacturing Chemist at Biotechnology",
      fieldOfExpertise: ["chemistry", "analytics", "math"],
      supportOffered: ["career after hs", "grad school", "interns..."],
      tag: "Available now",
    },
    {
      name: "Nala Goins",
      imgSrc: "/images/mentor-5.png",
      pronouns: "(she/they)",
      jobTitle: "Videographer & Photographer at Self-employed",
      fieldOfExpertise: ["video editing", "social media mgmt", "math"],
      supportOffered: ["career transition", "portfolio critique"],
      tag: "Available now",
    },
    {
      name: "Edward Fuanze",
      imgSrc: "/images/mentor-6.png",
      pronouns: "(he/him)",
      jobTitle: "Product Compliance Director at Nike",
      fieldOfExpertise: ["Organic chemistry", "Tech", "Science"],
      supportOffered: ["career after hs", "Early career", "resume..."],
      tag: "Available now",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  let counter = 0;
  interface ISlidesProps {
    name?: string;
    imgSrc?: string;
    pronouns?: string;
    jobTitle?: string;
    fieldOfExpertise?: string[];
    tag?: string;
    supportOffered?: string[];
  }
  // let imageSlider = document.querySelector<HTMLElement>(".image_slider");
  // let cardWidth = imageSlider.children[0].clientWidth;

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    }
    else if (newIndex + 3 >= mentors.length) {
      newIndex = mentors.length - 3
    }
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className={styles.rec_mentor_container}>
        <div className={styles.title_arrow_container}>
          <Title level={2} className="semibold">
            Recommended mentors <InfoCircleOutlined />
          </Title>
          <div className={styles.image_arrow_container}>
            <div
              className={styles.image_slider_left_arrow}
              onClick={() => updateIndex(currentIndex - 3)}
            >
              <LeftOutlined />
            </div>
            <div
              className={styles.image_slider_right_arrow}
              onClick={() => updateIndex(currentIndex + 3)}
            >
              <RightOutlined />
            </div>
          </div>
        </div>
        <div className={styles.image_slider_container}>
          <div className={styles.slider_show_case}>
            <div
              className={styles.image_slider}
              ref={imgRef}
            >
              {[...mentors]
                .slice(currentIndex, currentIndex + 3)
                .map((slide: ISlidesProps, index) => (
                  <RecommendedMentorCard
                    key={index}
                    name={slide.name}
                    imgSrc={slide.imgSrc}
                    pronouns={slide.pronouns}
                    jobTitle={slide.jobTitle}
                    tag={slide.tag}
                    supportOffered={slide.supportOffered}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
