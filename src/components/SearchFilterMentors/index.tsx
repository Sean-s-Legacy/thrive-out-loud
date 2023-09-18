import React from "react";
import type { MenuProps } from "antd";
import { Menu, Button, Typography, Pagination } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./SearchFilterMentors.module.css";
import MentorCard from "../MentorCard";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const SearchFilterMentors: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const { Title, Text, Link } = Typography;

  interface MentorProps {
    name?: string;
    imgSrc?: string;
    pronouns?: string;
    jobTitle?: string;
    fieldOfExpertise?: string[];
    supportOffered?: string[];
    tag?: string;
  }

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

  const items: MenuProps["items"] = [
    getItem("Sort By", "sub1", [
      { type: "divider" },
      getItem("Careers", "sub3", []),
      getItem("Focus Areas", "8"),
    ]),
    getItem("More Filters", "sub2", [getItem("Available this week", "5")]),
  ];

  return (
    <div className={styles.main_container}>
      <div className={styles.sort_filter_container}>
        <Button type="primary" className={styles.search_btn}>
          Sort & Filter
          <MenuOutlined />
        </Button>
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
      <div className="mentor-list-container">
        <Title level={2} className={styles.title_styles}>
          Find a mentor
        </Title>
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
          <Pagination
            defaultCurrent={1}
            total={50}
            className={styles.pagination_items}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilterMentors;
