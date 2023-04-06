import React from "react";
import { Avatar, Typography } from "antd";
import styles from "./TeamMember.module.css";

function index({ imgSrc = null, name, pronouns, role }) {
  const { Title, Text } = Typography;

  return (
    <div className={styles.container}>
      <Avatar size={216} src={imgSrc} />
      <div className={styles.nameContainer}>
        <Title level={3} className="semibold textAlignCenter">
          {name}
        </Title>
        <Text className="textLarge textAlignCenter">({pronouns})</Text>
      </div>
      <Text className="textLarge textAlignCenter">{role}</Text>
    </div>
  );
}

export default index;
