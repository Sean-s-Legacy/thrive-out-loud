import React from "react";
import { Typography } from "antd";
import styles from "./Hero.module.css";

function index(props) {
  const { Title } = Typography;
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <Title className="semibold">
          Sean’s Legacy is a public health non-profit redefining{" "}
          <span className="textPrimary7">primary prevention of suicide</span>
          through education and mentorship.{" "}
        </Title>
      </div>
    </section>
  );
}

export default index;
