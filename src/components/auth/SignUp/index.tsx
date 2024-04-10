import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Modal, Form, Divider, Typography, Row, Col } from "antd";
import { FcGoogle } from "react-icons/fc";
import { X } from "phosphor-react";
import Checkbox from "antd/lib/checkbox/Checkbox";

import { useAuth } from "@/context/AuthContext";
import styles from "./signup.module.css";
import InputWrapper from "@/components/InputWrapper";

const { Title, Text, Link } = Typography;
type SignUpData = {
  user_email: string;
  user_pswd: string;
};

type SignUpProps = SignUpData & {
  updateFields: (fields: Partial<SignUpData>) => void;
};

export default function SignUp({
  user_email,
  user_pswd,
  updateFields,
}: SignUpProps) {
  const { signInWithGoogle, signUp } = useAuth();

  const [checked, setChecked] = useState(null);
  const [error, setError] = useState(null);

  // Function to signup with email/password authentication
  // async function handleSubmit() {
  //   console.log("email:", email);
  //   console.log("password:", password);
  //   if (!email || !password) {
  //     setError("Please enter email and password");
  //     return;
  //   }
  //   try {
  //     await signUp(email, password);
  //   } catch (err) {
  //     setError("Incorrect email or password");
  //   }
  //   return;
  // }

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      {/* <Button type="primary">
        Sign up
      </Button> */}

      {/*
        <Row> */}
      {/* <Col span={12} className={styles.textContentWrapper}> */}
      <div className={styles.textContent}>
        {/* <div className={styles.titleContainer}>
                <Title level={2} className="semibold">
                  Welcome!
                </Title>
                <Text className="mediumWeight textLarge" type="secondary">
                  Connect with trusted mentors
                </Text>
              </div> */}
        <div className={styles.modalContent}>
          <Button
            onClick={signInWithGoogle}
            className="googlebtn"
            icon={<FcGoogle size={24} />}
          >
            Continue with Google
          </Button>
          <Divider className={styles.divider}>or</Divider>
          <div className={styles.inputsContainer}>
            <Form.Item>
              <InputWrapper
                label="Email"
                className
                onChange={(e) => updateFields({ user_email: e.target.value })}
                placeholder="Enter your email address"
                size="large"
                value={user_email}
              />
            </Form.Item>
            <Form.Item>
              <InputWrapper
                label="Password"
                className
                onChange={(e) => updateFields({ user_pswd: e.target.value })}
                password
                placeholder="Create a password"
                size="large"
                value={user_pswd}
              />
            </Form.Item>
          </div>
          <div>
            <Checkbox onChange={(e) => setChecked(e.target.checked)}>
              <span className="mediumWeight footnote">
                I am 18 years or older
              </span>
            </Checkbox>
          </div>
          <div className={styles.terms}>
            <Text className="footnote" type="secondary">
              By signing up, you agree to our{" "}
              <Link href="#" className="semibold">
                terms of use{" "}
              </Link>
              and{" "}
              <Link href="#" className="semibold">
                privacy policy
              </Link>
            </Text>
          </div>
        </div>

        {/* <div className="textAlignCenter">
                <Text className="semibold">
                  Already have an account? <Link href="#">Log in</Link>
                </Text>
              </div> */}
      </div>
      {/* </Col>
          <Col span={12}>
            <Image
              alt="modal"
              width={572}
              height={743.63}
              src="/images/auth-modal.jpg"
            />
          </Col> */}
      {/* </Row> */}
    </>
  );
}
