import React from "react";
import {
  Button,
  Typography,
  Pagination,
  Collapse,
  Input,
  Checkbox,
  Switch,
} from "antd";
import { UpOutlined, MenuOutlined, SettingOutlined } from "@ant-design/icons";
import styles from "./SearchFilterMentors.module.css";
import MentorCard from "../MentorCard";

const SearchFilterMentors: React.FC = () => {
  const { Panel } = Collapse;
  const { Title, Text } = Typography;

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

  const focusAreas = [
    "Navigating Academics",
    "Navigating the workfoce",
    "Navigating identity",
    "Personal growth",
    "Job search",
    "Early career",
    "Changing career",
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const onSwitch = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.sort_filter_container}>
        <Button type="primary" className={styles.search_btn}>
          Sort & Filter
          <MenuOutlined />
        </Button>
        <Collapse
          ghost
          collapsible="icon"
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <UpOutlined
              rotate={isActive ? 180 : 0}
              style={{ fontSize: "20px", fontWeight: "800" }}
            />
          )}
          className={styles.panel_border}
        >
          <Panel
            header="Sort By"
            key="1"
            style={{
              fontWeight: "bold",
            }}
          ></Panel>
        </Collapse>
        <Collapse
          defaultActiveKey="2"
          ghost
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <UpOutlined
              rotate={isActive ? 180 : 0}
              style={{ fontSize: "20px", fontWeight: "800" }}
            />
          )}
          className={styles.panel_border}
        >
          <Panel header="Careers" key="2">
            <Input
              placeholder="Ex: Journalism"
              addonAfter={<SettingOutlined />}
            />
          </Panel>
        </Collapse>
        <Collapse
          defaultActiveKey="1"
          ghost
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <UpOutlined
              rotate={isActive ? 180 : 0}
              style={{ fontSize: "20px", fontWeight: "800" }}
            />
          )}
        >
          <Panel header="Focus Areas" key="1">
            <div className={styles.checkbox_styles}>
              {focusAreas.map((focus, i) => {
                return (
                  <Checkbox key={i} style={{ margin: "0px" }}>
                    {focus}
                  </Checkbox>
                );
              })}
            </div>
          </Panel>
        </Collapse>
        <Collapse
          defaultActiveKey="2"
          ghost
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <UpOutlined
              rotate={isActive ? 180 : 0}
              style={{ fontSize: "20px", fontWeight: "800" }}
            />
          )}
          style={{
            width: "256px",
          }}
        >
          <Panel
            header="More Filters"
            key="2"
            style={{
              width: "256px",
              borderTop: "1px solid black",
              borderRadius: "0",
              fontWeight: "800",
            }}
          >
            <div className={styles.switch_container}>
              <Text
                style={{
                  fontWeight: "100",
                }}
              >
                Available this week
              </Text>
              <Switch onChange={onSwitch} />
            </div>
          </Panel>
        </Collapse>
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
