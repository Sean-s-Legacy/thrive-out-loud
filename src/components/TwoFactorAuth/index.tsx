import { Typography, InputNumber, Button } from "antd";
import React, { useState } from "react";
import styles from "./TwoFactorAuth.module.css"

export default function TwoFactorAuth() {
  const { Text, Title } = Typography;
  const [ value, setValue ] = useState(false)

  const onChange = (value: number) => {
    setValue(true)
  }

  return (
    <div className={styles.container}>
      <Title level={3} className="semibold textAlignCenter padding">
        Verify your phone number
      </Title>
      <Text type="secondary" className={styles.padding}>
        {
          "We'll need you to verify your phone number. This helps us create a secure platform for everyone."
        }
      </Text>
      <InputNumber style={{ width: '100%' }} min={10} max={10} placeholder="+1(000)000-0000" className={styles.margin} onChange={onChange} controls={false}/>
      <Button type="primary" block disabled={value === false ? true : false} className={styles.margin}>
        Send code
      </Button>
    </div>
  );
}
