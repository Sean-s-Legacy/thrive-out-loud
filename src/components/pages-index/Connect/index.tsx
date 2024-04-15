import React from "react";
import { Card } from "antd";
import Image from "next/image";
import styles from "./Connect.module.css";

const { Meta } = Card;
function index() {
  const cards = [
    {
      imgSrc: "/images/index/rainbow-icon.png",
      aspectRatio: 0.5,
      title: "100% LGBTQIA+",
      description: "Affirming mentorship by and for the LGBTQIA+ community",
    },
    {
      imgSrc: "/images/index/people-icon.png",
      aspectRatio: 1,
      title: "Personalized connections",
      description:
        "Find the right fit based on compatible identities, interests, and experiences",
    },
    {
      imgSrc: "/images/index/safety-icon.png",
      aspectRatio: 1,
      title: "A safe space",
      description:
        "We’re secure and judgment-free. We take your safety and privacy seriously",
    },
  ];
  return (
    <section className={styles.section}>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            style={{
              width: 341,
              height: 304,
              boxShadow: "0 4px 20px 0 rgba(149, 149, 149, 0.25)",
              borderRadius: "40px",
            }}
          >
            <div className={styles.cardContent}>
              <Image
                alt={card.title}
                width={40}
                height={40}
                //   height={card.aspectRatio < 1 ? 24 : 40}
                style={{ objectFit: "contain" }}
                src={card.imgSrc}
              />
              <div className={styles.textContainer}>
                <Meta
                  title={
                    <span
                      style={{
                        fontSize: "20px",
                        color: "rgba(0, 0, 0)",
                        fontWeight: "600",
                        display: "inline-block",
                        wordWrap: "break-word",
                        whiteSpace: "normal",
                        margin: "var(--spacing-06) 0 var(--spacing-05)",
                      }}
                    >
                      {card.title}
                    </span>
                  }
                  description={
                    <div
                      style={{
                        color: "var(--gray-gray-8, #595959)",
                      }}
                    >
                      {card.description}
                    </div>
                  }
                />
              </div>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
export default index;
