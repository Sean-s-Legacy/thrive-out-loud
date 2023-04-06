import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Modal, Form, Divider, Typography, Row, Col } from "antd";
import { FcGoogle } from "react-icons/fc";
import { X } from "phosphor-react";

import { useAuth } from "@/context/AuthContext";
import styles from "./login.module.css";
import InputWrapper from "@/components/InputWrapper";

const { Title, Text, Link } = Typography;

export default function SignUpModal() {
  const { signInWithGoogle, signIn } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Function to signup with email/password authentication
  async function handleSubmit() {
    console.log("email:", email);
    console.log("password:", password);
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    try {
      await signIn(email, password);
    } catch (err) {
      setError("Incorrect email or password");
    }
    return;
  }

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <Button onClick={showModal}>Login</Button>

      <Modal
        closeIcon={<X size={24} color="#ffffff" />}
        width={1140}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{ padding: 0 }}
      >
        <Row>
          <Col span={12} className={styles.textContentWrapper}>
            <div className={styles.textContent}>
              <div className={styles.titleContainer}>
                <Title level={2} className="semibold">
                  Welcome back!
                </Title>
                <Text className="mediumWeight textLarge" type="secondary">
                  Connect with trusted mentors
                </Text>
              </div>
              <div className={styles.modalContent}>
                <Button
                  onClick={signInWithGoogle}
                  className="googlebtn"
                  icon={<FcGoogle size={24} />}
                >
                  Continue with Google
                </Button>
                <Divider className={styles.divider}>or</Divider>

                <Form className={styles.form}>
                  <div className={styles.inputsContainer}>
                    <Form.Item>
                      <InputWrapper
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        size="large"
                        value={email}
                      />
                    </Form.Item>
                    <Form.Item>
                      <InputWrapper
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        password
                        placeholder="Create a password"
                        size="large"
                        value={password}
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Link href="#" className="semibold">
                      Forgot your password?
                    </Link>
                  </div>

                  <Button type="primary" onClick={handleSubmit} block>
                    Sign Up
                  </Button>
                </Form>
              </div>

              <div className="textAlignCenter">
                <Text className="semibold">
                  Don&apos;t have an account? <Link href="#">Sign Up</Link>
                </Text>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <Image
              alt="modal"
              width={572}
              height={743.63}
              src="/images/auth-modal.jpg"
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
}
