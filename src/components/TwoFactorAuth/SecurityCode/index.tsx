import { Typography, InputNumber, Button } from "antd";
import React, { useState } from "react";
import styles from "./SecurityCode.module.css";

export default function SecurityCode() {
  const { Text, Title, Link } = Typography;
  const [value, setValue] = useState(false);

  const onChange = (value: number) => {
    setValue(true);
  };

  return (
    <div className={styles.container}>
      <Title level={3} className="semibold textAlignCenter padding">
        Enter code
      </Title>
      <Text type="secondary" className={styles.padding}>
        Please enter the code we sent you.
      </Text>
      <InputNumber
        style={{ width: "100%" }}
        min={10}
        max={10}
        placeholder="00-00-00"
        className={styles.margin}
        onChange={onChange}
        controls={false}
      />
      <Link href="#" className="semibold">
        Resend Code
      </Link>
    </div>
  );
}
