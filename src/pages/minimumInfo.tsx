import InputWrapper from "@/components/InputWrapper";
import { Button, Form } from "antd";
import React, { useState } from "react";

export default function MinimumInfo() {
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [timezone, setTimezone] = useState("");
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div>
        <div>Create a profile to book mentors</div>
        <div>
          This information can only be seen by the Sean’s Legacy team and your
          future mentors
        </div>
        <Form>
          <div>
            <Form.Item>
              <InputWrapper
                label="Chosen name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter your name"
                size="medium"
              />
            </Form.Item>
            <Form.Item>
              <InputWrapper
                label="Pronouns"
                onChange={(e) => setPronouns(e.target.value)}
                placeholder="List your pronouns"
                size="medium"
                value={pronouns}
              />
            </Form.Item>
            <Form.Item>
              <InputWrapper
                label="Timezone"
                onChange={(e) => setTimezone(e.target.value)}
                placeholder="Select your timezone"
                size="medium"
                value={timezone}
              />
            </Form.Item>
          </div>

          <Button
            type="primary"
            onClick={handleSubmit}
            block
            disabled={!pronouns || !name || !timezone}
          >
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}
