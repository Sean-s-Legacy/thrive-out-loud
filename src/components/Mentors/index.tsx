import React from "react";
import MentorCard from "../MentorCard/index";
import styles from "./mentors.module.css";

export default function Mentors() {
  const mentors = [
    {
      name: "Olivia Rhye",
      imgSrc: "/images/mentor1.png",
      pronouns: "(she/hers)",
      jobTitle: "Math Teacher at LA Unified School Disctrict",
      fieldOfExpertise: ["math", "education"],
      supportOffered: ["career after hs", "early career"],
    },
    {
      name: "Drew Cano",
      imgSrc: "/images/mentor2.png",
      pronouns: "(he/him)",
      jobTitle: "Customer Success Manager at MetaFactor",
      fieldOfExpertise: ["coaching", "management"],
      supportOffered: ["queer prof. advice", "career direction"],
      tag: "Available now",
    },
    {
      name: "Henry Potter",
      imgSrc: "/images/mentor3.png",
      pronouns: "(he/they)",
      jobTitle: "Data Science Lead at Elementor",
      fieldOfExpertise: ["stat analysis", "machine learning", "data..."],
      supportOffered: ["career direction", "early career", "resume..."],
      tag: "Available now",
    },
    {
      name: "Natali Craig",
      imgSrc: "/images/mentor4.png",
      pronouns: "(she/hers)",
      jobTitle: "Manufacturing Chemist at Biotechnology",
      fieldOfExpertise: ["chemistry", "analytics", "math"],
      supportOffered: ["career after hs", "grad school", "interns..."],
      tag: "Available now",
    },
    {
      name: "Nala Goins",
      imgSrc: "/images/mentor5.png",
      pronouns: "(she/they)",
      jobTitle: "Videographer & Photographer at Self-employed",
      fieldOfExpertise: ["video editing", "social media mgmt", "math"],
      supportOffered: ["career transition", "portfolio critique"],
      tag: "Available now",
    },
    {
      name: "Edward Fuanze",
      imgSrc: "/images/mentor6.png",
      pronouns: "(he/him)",
      jobTitle: "Product Compliance Director at Nike",
      fieldOfExpertise: ["Organic chemistry", "Tech", "Science"],
      supportOffered: ["career after hs", "Early career", "resume..."],
      tag: "Available now",
    },
  ];

  interface MentorProps {
    name?: string;
    imgSrc?: string;
    pronouns?: string;
    jobTitle?: string;
    fieldOfExpertise?: string[];
    supportOffered?: string[];
    tag?: string;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {mentors.map((mentor: MentorProps, index) => (
          <MentorCard
            key={index}
            name={mentor.name}
            imgSrc={mentor.imgSrc}
            pronouns={mentor.pronouns}
            jobTitle={mentor.jobTitle}
            fieldOfExpertise={mentor.fieldOfExpertise}
            supportOffered={mentor.supportOffered}
            tag={mentor.tag}
          />
        ))}
      </div>
    </div>
  );
}
