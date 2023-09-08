import React from "react";
import Image from "next/image";
import { Typography, Card, Tag } from "antd";
import { Briefcase } from "phosphor-react";

import styles from "./RecMentorCard.module.css";

const { Text } = Typography;

export default function RecMentorCard({
  name,
  imgSrc,
  pronouns,
  jobTitle,
  tag,
  supportOffered
}) {
  return (
    <Card
      style={{}}
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
      <div className={styles.textContentWrapper}>
        <div className={styles.cardNamePronouns}>
          <Text className="textLarge semibold">{name}</Text>
          <Text className="textLarge">{pronouns}</Text>
        </div>
        <div className={styles.cardJobTitle}>
          <Briefcase size={26} className={styles.icon} />
          <Text type="secondary">{jobTitle}</Text>
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
    </Card>
  );
}
