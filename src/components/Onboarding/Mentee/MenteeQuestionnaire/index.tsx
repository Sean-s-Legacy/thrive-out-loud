import React, { FormEvent, useState } from 'react';
import { useMultistepForm } from '@/utils/useMultistepform';
import NameAndPronouns from '@/components/Onboarding/Mentee/NameAndPronouns';
import Location from '@/components/Onboarding/Mentee/Location';
import Industry from '@/components/Onboarding/Mentee/Industry';
import FocusArea from '@/components/Onboarding/Mentee/FocusArea';
import GenderIdentity from '@/components/Onboarding/Mentee/GenderIdentity';
import SexualOrientation from '@/components/Onboarding/Mentee/SexualOrientation';
import EthnicityAndLanguages from '@/components/Onboarding/Mentee/EthnicityAndLanguage';

import ProgressBarStep from '@/components/Onboarding/ProgressBarStep';

import { MenteeSignUpPayLoad } from 'functions/src/user/structs';

import { useAuth } from "@/context/AuthContext";
import AlreadyLoggedIn from '@/components/Errors/AlreadyLoggedIn';
import SignUp from '@/components/auth/SignUp';
import { Button } from 'antd';

import {
  validateChosenName,
  validateLocation,
  validateGenderIdentity,
  validateSexualOrientation,
  validateEthnicityAndLanguage,
  validateIndustry,
  validateFocusArea,
  validateEmail,
  validatePassword
} from '@/utils/validationRules';

import styles from './MenteeQuestionnaire.module.css';

const INITIAL_DATA: MenteeSignUpPayLoad = {
  user_chosen_name: '',
  user_name_first: '',
  user_name_last: '',
  user_pronouns: '',
  user_date_of_birth: '',
  user_location: '',
  user_industry: [],
  user_focus_area: [],
  user_gender_identity: [],
  user_match_on_gender_identity: false,
  user_ethnicity: [],
  user_match_on_ethnicity: false,
  user_language: [],
  user_sexual_orientation: [],
  user_match_on_sexual_orientation: false,
  user_email: '',
  user_pswd: '',
  user_role: 'mentee',
}

interface ErrorMessage {
  [key: string]: string[] | undefined;
}

export default function MenteeQuestionnaire() {
  const { currentUser } = useAuth();
  if (currentUser) {
    return <AlreadyLoggedIn />;
  } else {
    return (
      <div>
        <MenteeForm />
      </div>
    );
  }
}

function MenteeForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const [checked, setChecked] = useState(false); // Manage checked state separately
  const [errors, setErrors] = useState<Partial<MenteeSignUpPayLoad>>({});

  function updateFields(fields: Partial<MenteeSignUpPayLoad>) {
    setData(prev => ({ ...prev, ...fields }));
  }

  function previousStep() {
    prev();
    setErrors({});
  }

  const { steps, currentStepIndex, step, next, prev, isFirstStep, isLastStep } = useMultistepForm([
    <NameAndPronouns key="Chosen Name" {...data} updateFields={updateFields} errorMessage={errors} />,
    <Location key="Location" {...data} updateFields={updateFields} errorMessage={errors} />,
    <GenderIdentity key="Gender Identity" {...data} updateFields={updateFields} errorMessage={errors} />,
    <SexualOrientation key="Sexual Orientation" {...data} updateFields={updateFields} errorMessage={errors} />,
    <EthnicityAndLanguages key="Ethnicity & Language" {...data} updateFields={updateFields} errorMessage={errors} />,
    <Industry key="Industry" {...data} updateFields={updateFields} errorMessage={errors} />,
    <FocusArea key="Focus Area" {...data} updateFields={updateFields} errorMessage={errors} />,
    <SignUp key="SignUp" {...data} updateFields={updateFields} errorMessage={errors} checked={checked} setChecked={setChecked} />
  ]);

  const { signUp } = useAuth();

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const newErrors: ErrorMessage = {};
    const validationRules: { [key: string]: Function } = {
      'Chosen Name': validateChosenName,
      'Location': validateLocation,
      'Gender Identity': validateGenderIdentity,
      'Sexual Orientation': validateSexualOrientation,
      'Ethnicity & Language': validateEthnicityAndLanguage,
      'Industry': validateIndustry,
      'Focus Area': validateFocusArea,
      'SignUp': (data: MenteeSignUpPayLoad, errors: ErrorMessage) => {
        validateEmail(data, errors);
        validatePassword(data, errors);
        if (!checked) errors.checked = ["Please verify you are 18 years or older."];
      }
    };

    const currentStepKey = steps[currentStepIndex].key;

    if (validationRules[currentStepKey]) {
      validationRules[currentStepKey](data, newErrors);
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }

    if (!isLastStep) {
      setErrors({});
      return next();
    }

    signUp(data);
  }
  return (
    <div className={styles.questionnaireContainer}>
      <div className={styles.onboardingProgress}>
        {steps.map((stepName, index) => (
          <ProgressBarStep key={index} stepName={stepName} index={index} currentStepIndex={currentStepIndex}/>
        ))}
      </div>
      <div className={styles.onboardingForm}>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.stepContainer}>
            {step}
          </div>
          <div className={styles.buttonContainer}>
            <Button type="primary" htmlType="submit">
              {isLastStep ? 'Submit' : 'Next'}
            </Button>
            {!isFirstStep && (
              <Button type="default" onClick={previousStep}>
                Back
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
