import React from "react";

import { Row, Col, Typography } from "antd";

import styles from "./OurTeam.module.css";
import TeamMember from "@/components/pages-about/TeamMember";

function index(props) {
  const { Title } = Typography;
  const team = [
    {
      imgSrc: null,
      name: "Hope Dehnert",
      pronouns: "she/her",
      role: "Co-Founder and Managing Director, MPH",
    },
    {
      imgSrc: null,
      name: "Alli Shipkowski",
      pronouns: "she/her",
      role: "Co-Founder and Director of Operations",
    },
    {
      imgSrc: null,
      name: "Steph Lambruschini",
      pronouns: "she/her",
      role: "Product Designer",
    },
    {
      imgSrc: null,
      name: "Tysheena Jackson",
      pronouns: "she/her",
      role: "Director of Social Media and Comms",
    },
    {
      imgSrc: null,
      name: "Dylan Williams",
      pronouns: "he/him",
      role: "Copywriter",
    },
    {
      imgSrc: null,
      name: "Tyrone Best",
      pronouns: "he/him",
      role: "Drug Addiction & Substance Abuse Liason",
    },
    {
      imgSrc: null,
      name: "Ethan Lloyd",
      pronouns: "he/him",
      role: "Inclusion in Sports & Athletics Liason",
    },
    {
      imgSrc: null,
      name: "Jenna Wilkinson",
      pronouns: "she/her",
      role: "Graphic Designer",
    },
    {
      imgSrc: null,
      name: "Anthony Santoro",
      pronouns: "he/him",
      role: "Training & Research Associate",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <Title level={2} className="bold textPrimary7 textAlignCenter">
          Meet the team
        </Title>
        <Row gutter={[24, 48]}>
          {team.map((member, index) => {
            return (
              <Col span={8} key={index}>
                <TeamMember
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
