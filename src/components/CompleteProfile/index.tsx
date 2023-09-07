import React from "react";
import styles from "./CompleteProfile.module.css";
import { Typography, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import img_placeholder from "../../../public/images/img_placeholder.png";
import {
  EditOutlined,
  IdcardOutlined,
  StarOutlined,
  ReadOutlined,
} from "@ant-design/icons";

export default function CompleteProfile() {
  const { Title, Text } = Typography;
  return (
    <>
      <Card style={{ marginTop: "40px" }}>
        <div className={styles.complete_profile_container}>
          <div className={styles.complete_profile_left}>
            <Image
              src={img_placeholder}
              alt="user_image"
              className={styles.cardImg}
            />
            <div className={styles.left_inner_text}>
              <Title level={2} className="semibold">
                Complete profile
              </Title>
              <Text type="secondary">
                Share your story, experience, and interests to build a strong{" "}
                <br></br>
                mentor connection from the start.
              </Text>
              <Link href="/dashboard">
                <EditOutlined /> Edit profile
              </Link>
            </div>
          </div>

          <div className={styles.complete_profile_right}>
            <Link href="/dashboard">
              <ReadOutlined style={{ fontSize: '28px'}}/>{" "}
              <Text className="mediumWeight" type="secondary" style={{ marginLeft: '10px', verticalAlign: 'top', lineHeight: '24px'}}>
                My story
              </Text>
            </Link>
            <Link href="/dashboard">
              <IdcardOutlined style={{ fontSize: '28px'}}/>{" "}
              <Text className="mediumWeight" type="secondary" style={{ marginLeft: '10px', verticalAlign: 'top', lineHeight: '24px'}}>
                My experience
              </Text>
            </Link>
            <Link href="/dashboard">
              <StarOutlined style={{ fontSize: '28px'}}/>{" "}
              <Text className="mediumWeight" type="secondary" style={{ marginLeft: '10px', verticalAlign: 'top', lineHeight: '24px'}}>
                My interests
              </Text>
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
}
