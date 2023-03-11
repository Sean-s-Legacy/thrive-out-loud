import React from "react";
import { Divider, Typography, Button, Space, Card } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

export default function MentorCard() {
  return (
    <Card
      style={{ width: 348, height: 520 }}
      hoverable
      cover={<img alt="example" src="/images/mentor1.png" />}
    >
      <p>name</p>
      <p>occupation</p>
      <p>tags</p>
    </Card>
  );
}
