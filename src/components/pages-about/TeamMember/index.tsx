import React from "react";
import { Avatar, Typography } from "antd";
import styles from "./TeamMember.module.css";

function index({ imgSrc = null, name, pronouns, role }) {
  const { Title, Text } = Typography;

  return (
    <div className={styles.container}>
      <Avatar size={216} src={imgSrc} />
      <div className={styles.nameContainer}>
        <Text className="textLarge mediumWeight textAlignCenter">{name}</Text>
        <Text className="footnote textNeutral8 textAlignCenter">
          ({pronouns})
        </Text>
        <Text className="textAlignCenter">{role}</Text>
      </div>
    </div>
  );
}

export default index;
