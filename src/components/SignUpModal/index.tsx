import React, { useState } from "react";
import Image from "next/image";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  Button,
  Modal,
  Form,
  Input,
  Divider,
  Typography,
  Row,
  Col,
} from "antd";
import styles from "./signup.module.css";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { handleGoogleSignIn } from "@/Firebase/functions";
import { redirect } from "next/navigation";

const { Title, Text, Link } = Typography;

export default function SignUpModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>

      <Modal
        width={1000}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{ padding: 0 }}
      >
        <Row>
          <Col span={12} className={styles.textContent}>
            <div className={styles.modalContent}>
              <div className={styles.titleContainer}>
                <Title level={2} className="semibold">
                  Welcome!
                </Title>
                <Text className="mediumWeight textLarge" type="secondary">
                  Please create an account
                </Text>
              </div>

              <div>
                <Form className={styles.form}>
                  <Form.Item>
                    <h4>Email</h4>
                    <Input className={styles.input} placeholder="Enter Email" />
                  </Form.Item>
                  <Form.Item>
                    <h4>Password</h4>
                    <Input.Password
                      className={styles.input}
                      placeholder="Enter Password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>
                  <div>
                    <Checkbox className="footnote">
                      I certify that I am 18 years or older
                    </Checkbox>
                    <Checkbox className="footnote">
                      I have read & accepted Sean’s Legacy’s
                      <Link>privacy policy</Link>
                    </Checkbox>
                  </div>

                  <Button type="primary" size="large">
                    Sign Up
                  </Button>

                  <Divider className={styles.divider}>or</Divider>

                  <Button
                    onClick={handleGoogleSignIn}
                    size="large"
                    className={styles.googlebtn}
                  >
                    Continue with Google
                  </Button>
                  <p className="mediumWeight semibold">
                    Already have an account?
                    <a href="{{url}}"> Log in</a>
                  </p>
                </Form>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <Image
              alt="modal"
              width={572}
              height={743.63}
              src="/images/module.png"
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
}
