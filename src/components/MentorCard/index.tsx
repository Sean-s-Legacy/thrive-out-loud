import React from "react";
import { Divider, Typography, Button, Space, Card } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

export default function MentorCard({
  name,
  imgSrc,
  pronouns,
  jobTitle,
  fieldOfExpertise,
  supportOffered,
  tag,
}) {
  return (
    <Card
      style={{ width: 348, height: 520 }}
      hoverable
      cover={<img alt="example" src={imgSrc} />}
    >
      <p>
        {name} {pronouns}
      </p>
      <p>{jobTitle}</p>
      <p>{fieldOfExpertise}</p>
      <p>{supportOffered}</p>
    </Card>
  );
}
