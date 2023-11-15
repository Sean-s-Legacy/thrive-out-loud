import { Typography, InputNumber, Button, Form } from "antd";
import React, { useState } from "react";
import styles from "./TwoFactorAuth.module.css";
import axios from "axios";
import { MaskedInput } from "antd-mask-input";

export default function TwoFactorAuth() {
  const { Text, Title } = Typography;
  const [value, setValue] = useState("");
  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/\(|\)|-/g, "");
  };
  const sendOTPCode = () => {
    const phone_number = formatPhoneNumber(value);
    axios.post(
      "https://us-central1-seans-legacy.cloudfunctions.net/app/user/generateTwoFactor",
      { phone_number }
    );
  };
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
      <MaskedInput
        mask={"+1(000)000-0000"}
        style={{ width: "100%" }}
        className={styles.margin}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button
        type="primary"
        block
        disabled={value.includes("_")}
        className={styles.margin}
        onClick={sendOTPCode}
      >
        Send code
      </Button>
    </div>
  );
}
