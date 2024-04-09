import React from "react";

import { Row, Col, Typography } from "antd";

import styles from "./OurTeam.module.css";
import TeamMember from "@/components/pages-about/TeamMember";

function index(props) {
  const { Title } = Typography;
  const team = [
    {
      imgSrc: "/images/about/hope.png",
      name: "Hope Dehnert",
      pronouns: "she/her",
      role: "Co-Founder and Managing Director, MPH",
    },
    {
      imgSrc: "/images/about/alli.png",
      name: "Alli Shipkowski",
      pronouns: "she/her",
      role: "Co-Founder and Director of Operations",
    },
    {
      imgSrc: "/images/about/steph.png",
      name: "Steph Lambruschini",
      pronouns: "she/her",
      role: "Product Designer",
    },
    {
      imgSrc: "/images/about/tysheena.png",
      name: "Tysheena Jackson",
      pronouns: "she/her",
      role: "Director of Social Media and Comms",
    },
    {
      imgSrc: "/images/about/dylan.png",
      name: "Dylan Williams",
      pronouns: "he/him",
      role: "Copywriter",
    },
    {
      imgSrc: "/images/about/tyrone.png",
      name: "Tyrone Best",
      pronouns: "he/him",
      role: "Drug Addiction & Substance Abuse Liaison",
    },
    {
      imgSrc: "/images/about/ethan.png",
      name: "Ethan Lloyd",
      pronouns: "he/him",
      role: "Inclusion in Sports & Athletics Liason",
    },
    {
      imgSrc: "/images/about/jenna.png",
      name: "Jenna Wilkinson",
      pronouns: "she/her",
      role: "Graphic Designer",
    },
    {
      imgSrc: "/images/about/anthony.png",
      name: "Anthony Santoro",
      pronouns: "he/him",
      role: "Training & Research Associate",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <Title level={2} className="bold textAlignCenter">
          Meet the Thrive Out Loud team
        </Title>
        <Row gutter={[24, 48]}>
          {team.map((member, index) => {
            return (
              <Col span={8} key={index}>
                <TeamMember
                  imgSrc={member.imgSrc}
                  name={member.name}
                  pronouns={member.pronouns}
                  role={member.role}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default index;
