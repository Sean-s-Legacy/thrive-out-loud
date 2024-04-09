import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button, Checkbox, Form, Input, Row, Typography } from "antd";

import styles from "./ContactUs.module.css";
import InputWrapper from "@/components/InputWrapper";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { Title, Text } = Typography;

  return (
    <section className={styles.contactSection}>
      <Image
        height={701}
        width={576}
        src={"/images/about/contact-us.png"}
        alt="Woman standing in front of a laptop, drinking an iced coffee through a straw."
      />
      <div className={styles.contentWrapper}>
        <div className={styles.headingContainer}>
          <Title className="semibold textPrimary10">Contact us</Title>
          <Text className="textLarge">
            Have questions? Want to provide feedback? The Thrive Out Loud team
            is here for you.
          </Text>
        </div>
        <Form
          name="contact"
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          //   autoComplete="off"
        >
          <div className={styles.formInputs}>
            <div className={styles.nameInputs}>
              <Form.Item className={styles.formItem}>
                <InputWrapper
                  label="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  size="large"
                  value={firstName}
                />
              </Form.Item>
              <Form.Item className={styles.formItem}>
                <InputWrapper
                  label="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Lee"
                  size="large"
                  value={lastName}
                />
              </Form.Item>
            </div>
            <Form.Item className={styles.formItem}>
              <InputWrapper
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="We’ll use this to respond to your request."
                size="large"
                value={email}
              />
            </Form.Item>
            <Form.Item className={styles.formItem}>
              <InputWrapper
                label="Message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Let us know your question, comments, or feedback."
                size="large"
                textarea
                rows={5}
                value={message}
              />
            </Form.Item>
            <div className={styles.alignLeft}>
              <Form.Item
                //   className={styles.formItem}
                name="agree"
                valuePropName="checked"
                className={styles.alignLeft}
              >
                <Checkbox>
                  I agree to the{" "}
                  <Link className="textPrimary8 bold underline" href="#">
                    privacy policy
                  </Link>
                  .
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  disabled
                  type="default"
                  htmlType="submit"
                  size="large"
                  className="textPrimary10"
                >
                  Send message
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
}
