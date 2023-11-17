import React, { useState } from "react";
import { useRouter } from "next/router";
import InputWrapper from "@/components/InputWrapper";
import { Button, Form, Select } from "antd";


export default function MinimumInfo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    timezone: "",
  });
  const handleSubmit = () => {
    console.log(formData);
    router.push("/focusAreas");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          height: "454px",
          width: "505px",
          margin: "auto",
        }}
      >
        <p style={{ fontWeight: "500", fontSize: "30px", margin: "10px 0" }}>
          Create a profile to book mentors
        </p>
        <p style={{ fontSize: "20px", fontWeight: "200", opacity: "0.55" }}>
          This information can only be seen by the Sean’s Legacy team and your
          future mentors
        </p>
        <Form>
          <div>
            <Form.Item style={{ margin: "32px 0 6px" }}>
              <InputWrapper
                label="Chosen name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                placeholder="Enter your name"
                size="medium"
                required
              />
            </Form.Item>
            <Form.Item style={{ margin: "6px 0" }}>
              <InputWrapper
                label="Pronouns"
                onChange={(e) =>
                  setFormData({ ...formData, pronouns: e.target.value })
                }
                placeholder="List your pronouns"
                size="medium"
                value={formData.pronouns}
                required
              />
            </Form.Item>
            <Form.Item style={{ margin: "6px 0 32px" }}>
              <label>
                Timezone <span style={{ color: "#e32" }}>*</span>
              </label>
              <Select
                placeholder="Select your timezone"
                onChange={(e) => setFormData({ ...formData, timezone: e })}
              >
                <Select.Option value="EST">EST(UTC-5)</Select.Option>
                <Select.Option value="CST">CST(UTC-6)</Select.Option>
                <Select.Option value="MST">MST(UTC-7)</Select.Option>
                <Select.Option value="PST">PST(UTC-8)</Select.Option>
                <Select.Option value="AKST">AKST(UTC-9)</Select.Option>
                <Select.Option value="HST">HST(UTC-10)</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <Button
            type="primary"
            onClick={handleSubmit}
            block
            disabled={
              !formData.name || !formData.pronouns || !formData.timezone
            }
          >
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}
