import React, { useState, useEffect } from "react";
import { Button, Form, Divider, Typography} from "antd";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { useAuth } from "@/context/AuthContext";
import styles from "./signup.module.css";
import InputWrapper from "@/components/InputWrapper";
import { user } from "firebase-functions/v1/auth";


const { Title, Text, Link } = Typography;
type SignUpData = {
  user_role: string;
  user_chosen_name: string;
  user_pronouns: string;
  user_date_of_birth: string;
  user_location: string;
  user_industry: string[];
  user_focus_area: string[];
  user_gender_identity: string[];
  user_sexual_orientation: string[];
  user_ethnicity: string[];
  user_language: string[];
  user_email: string;
  user_pswd: string;
};

type SignUpProps = SignUpData & {
  updateFields: (fields: Partial<SignUpData>) => void;
};

export default function SignUp({
  user_email,
  user_pswd,
  user_chosen_name,
  user_date_of_birth,
  user_location,
  user_pronouns,
  user_industry,
  user_focus_area,
  user_ethnicity,
  user_language,
  user_gender_identity,
  user_sexual_orientation,
  user_role,
  updateFields,
}: SignUpProps) {
  const { signInWithGoogle, signUp } = useAuth();

  const [checked, setChecked] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleGoogleSignIn = () => { signInWithGoogle(
    {
      user_role: user_role,
      user_chosen_name: user_chosen_name,
      user_pronouns: user_pronouns,
      user_date_of_birth: user_date_of_birth,
      user_location: user_location,
      user_industry: user_industry,
      user_focus_area: user_focus_area,
      user_gender_identity: user_gender_identity,
      user_sexual_orientation: user_sexual_orientation,
      user_ethnicity: user_ethnicity,
      user_language: user_language
    })
  }

  return (
    <>
      <div className={styles.textContent}>
        <div className={styles.modalContent}>
          <Button
            onClick={handleGoogleSignIn}
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
      </div>
    </>
  );
}
