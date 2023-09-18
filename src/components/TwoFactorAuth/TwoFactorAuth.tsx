import { Typography, Input, Button } from "antd";
import React from "react";

export default function TwoFactorAuth() {
  const { Title } = Typography;
  return (
    <>
      <Title level={2} className="semibold textAlignCenter">
        Verify your phone number
      </Title>
      <Input placeholder="+1(000)000-0000" />
      <Button type="primary" block disabled={true}>
        Send code
      </Button>
    </>
  );
}
