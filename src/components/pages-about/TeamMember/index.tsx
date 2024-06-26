import React from "react";
import { Avatar, Typography } from "antd";
import styles from "./TeamMember.module.css";

function TeamMember({ imgSrc = null, name, pronouns, role }) {
  const { Title, Text } = Typography;

  return (
    <div className={styles.container}>
      <Avatar size={216} src={imgSrc} />
      <div className={styles.nameContainer}>
        <Title level={4} className="textAlignCenter textPrimaryBlack">
          {name}
        </Title>
        <Text className="footnote textNeutral8 textAlignCenter">
          ({pronouns})
        </Text>
        <div className={styles.roleContainer}>
          <Text className="regularWeight textPrimaryBlack">{role}</Text>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
