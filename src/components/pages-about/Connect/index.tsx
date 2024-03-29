import React from "react";
import { Card } from "antd";
import Image from "next/image";
import styles from "./Connect.module.css";

const { Meta } = Card;
function index() {
  const cards = [
    {
      imgSrc: "/images/about/100lgbtqia.png",
      title: "100% LGBTQIA+",
      description: "Affirming mentorship by and for the LGBTQIA+ community/her",
    },
    {
      imgSrc: "/images/about/personalized.png",
      title: "Personalized connections",
      description:
        "Find the right fit based on compatible identities, interests, and experiences",
    },
    {
      imgSrc: "/images/about/safe-space.png",
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
            className={styles.cardProp}
            style={{
              width: 346,
              height: 479,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            cover={
              <Image
                alt={card.title}
                width={346}
                height={338}
                src={card.imgSrc}
              />
            }
          >
            <Meta title={card.title} description={card.description} />
          </Card>
        );
      })}
    </section>
  );
}
export default index;
