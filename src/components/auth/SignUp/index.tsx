import React, { useState, useEffect } from "react";
import { Form, Divider, Typography, Checkbox, Button } from "antd"; // Import Button component
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/context/AuthContext";
import styles from "./signup.module.css";
import InputWrapper from "@/components/InputWrapper";
import { user } from "firebase-functions/v1/auth";


const { Text, Link } = Typography;

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
  checked: boolean; // Add checked property
};

type SignUpProps = SignUpData & {
  updateFields: (fields: Partial<SignUpData>) => void;
  errorMessage: Partial<SignUpData>;
  setChecked: (checked: boolean) => void; // Add setChecked prop
};

export default function SignUp({
  user_email,
  user_pswd,
  user_role,
  user_chosen_name,
  user_pronouns,
  user_date_of_birth,
  user_location,
  user_sexual_orientation,
  user_gender_identity,
  user_ethnicity,
  user_language,
  user_industry,
  user_focus_area,
  checked,
  updateFields,
  errorMessage,
  setChecked,
}: SignUpProps) {
  const { signInWithGoogle } = useAuth();

  useEffect(() => {
  }, [errorMessage]);

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
    <div className={styles.signUpContainer}>
      <Button onClick={handleGoogleSignIn} className="googlebtn" icon={<FcGoogle size={24} />}>
        Continue with Google
      </Button>
      <Divider className={styles.divider}>or</Divider>
      <div className={styles.inputsContainer}>
        <Form.Item>
          <InputWrapper
            className
            label="Email"
            onChange={(e) => updateFields({ user_email: e.target.value })}
            placeholder="Enter your email address"
            size="large"
            value={user_email}
          />
        </Form.Item>
        {errorMessage.user_email && (
        <p className="error-message">
          <img src="/images/Warning.svg" alt="Warning" /> {errorMessage.user_email}
        </p>
      )}
        <Form.Item >
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
        {errorMessage.user_pswd && (
        <p className="error-message">
          <img src="/images/Warning.svg" alt="Warning" /> {errorMessage.user_pswd}
        </p>
      )}
      </div>
      <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
        <span className="mediumWeight footnote">I am 18 years or older</span>
      </Checkbox>
      {errorMessage.checked && (
        <p className="error-message">
          <img src="/images/Warning.svg" alt="Warning" /> {errorMessage.checked}
        </p>
      )}


      <div className={styles.terms}>
        <Text className="footnote" type="secondary">
          By signing up, you agree to our{" "}
          <Link href="#" className="semibold">
            terms of use
          </Link>{" "}
          and{" "}
          <Link href="#" className="semibold">
            privacy policy
          </Link>
        </Text>
      </div>
    </div>
  );
}
