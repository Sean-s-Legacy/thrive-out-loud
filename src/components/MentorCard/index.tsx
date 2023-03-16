import React from "react";

import { Divider, Typography, Button, Space, Card } from "antd";
import styles from "./MentorCard.module.css";

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
      style={{
        width: 348,
        height: 520,
        border: "none",
        backgroundColor: "#f9f9f9",
      }}
      bordered={false} /*it seems it's not working */
      hoverable
      cover={
        <img
          alt="example"
          src={imgSrc}
          style={{ height: 340, objectFit: "cover" }}
        />
      }
    >
      <div>
        <h5>
          {name} {pronouns}
        </h5>
        <h5>{jobTitle}</h5>
        <br />
        {fieldOfExpertise.map((el: string, i: number) => {
          return <span key={i}>{el} </span>;
        })}
        <br />
        <br />
        {supportOffered.map((el: string, i: number) => {
          return <span key={i}> {el}</span>;
        })}
        <br />
      </div>
    </Card>
  );
}
