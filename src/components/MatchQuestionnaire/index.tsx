import React from "react";
import styles from "./MatchQuestionnaire.module.css";
import { Typography, Card, Button } from "antd";
import Image from "next/image";
import user_match from "../../../public/images/index/user_match.png";
import { RightCircleFilled } from "@ant-design/icons";

export default function MatchQuestionnaire() {
  const { Title, Text } = Typography;
  return (
    <>
      <Card style={{ marginTop: "40px" }}>
        <div className={styles.match_questionnaire_container}>
          <div className={styles.match_questionnaire_left}>
            <Title level={2} className="semibold">
              Match Questionnaire
            </Title>
            <Text type="secondary">
              Take a quick mentorship questionnaire to get mentor matches
              <br></br>that suit your individual preferences and professional
              needs.
            </Text>
            <Button type="primary" className={styles.btn_custom_style}>
              <RightCircleFilled className={styles.icon_custom_style} />{" "}
              <span className={styles.span_style}>Take Questionnaire</span>
            </Button>
          </div>
          <Image
            src={user_match}
            alt="match_questionnaire_image"
            style={{ transform: "scale(1.12)" }}
          />
        </div>
      </Card>
    </>
  );
}
