import React from "react";
import Image from "next/image";
import { Typography, Card, Tag } from "antd";
import { Briefcase } from "phosphor-react";

import styles from "./MentorCard.module.css";

const { Text } = Typography;

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
      className={styles.card}
      bordered={false}
      hoverable
      cover={
        <Image
          src={imgSrc}
          alt={`Portrait of mentor ${name}`}
          height={340}
          width={348}
          className={styles.cardImg}
        />
      }
    >
      <div className="space-3 vertical">
        <div className="space-1">
          <Text className="textLarge semibold">{name}</Text>
          <Text className="textLarge">{pronouns}</Text>
        </div>
        <div className="space-3 align-center">
          <Briefcase size={26} className={styles.icon} />
          <Text type="secondary">{jobTitle}</Text>
        </div>
        <div className="space-2 vertical">
          <div className={styles.tagWrapper}>
            {fieldOfExpertise.map((el: string, i: number) => {
              return (
                <Tag key={i} color="magenta">
                  {el}
                </Tag>
              );
            })}
          </div>
          <div className={styles.tagWrapper}>
            {supportOffered.map((el: string, i: number) => {
              return (
                <Tag key={i} className="tagPrimaryColor">
                  {el}
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
