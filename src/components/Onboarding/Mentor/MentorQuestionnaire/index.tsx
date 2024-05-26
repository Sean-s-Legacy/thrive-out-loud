import React, { FormEvent, useState } from 'react';
import { useMultistepForm } from 'functions/src/utils/useMultistepform';

import NameAndPronouns from '@/components/Onboarding/Mentor/NameAndPronouns';
import Location from '@/components/Onboarding/Mentor/Location';
import Industry from '@/components/Onboarding/Mentor/Industry';
import FocusArea from '@/components/Onboarding/Mentor/FocusArea';
import GenderIdentity from '@/components/Onboarding/Mentor/GenderIdentity';
import SexualOrientation from '@/components/Onboarding/Mentor/SexualOrientation';
import EthnicityAndLanguages from '@/components/Onboarding/Mentor/EthnicityAndLanguage';

import ProgressBarStep from '@/components/Onboarding/ProgressBarStep';

import { MentorSignUpPayload } from 'functions/src/user/structs';
import styles from './MentorQuestionnaire.module.css';
import { useAuth } from '@/context/AuthContext';
import AlreadyLoggedIn from '@/components/Errors/AlreadyLoggedIn';
import { Button } from 'antd';
import SignUp from '@/components/auth/SignUp';

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

const INITIAL_DATA: MentorSignUpPayload = {
  user_chosen_name: '',
  user_name_first: '',
  user_name_last: '',
  user_pronouns: '',
  user_date_of_birth: '',
  user_location: '',
  user_industry: [],
  user_focus_area: [],
  user_gender_identity: [],
  user_sexual_orientation: [],
  user_ethnicity: [],
  user_language: [],
  user_email: '',
  user_pswd: '',
  user_role: 'mentor'
};

interface ErrorMessage {
  [key: string]: string[] | undefined;
}

export default function MentorQuestionnaire() {
  const { currentUser } = useAuth();
  if (currentUser) {
    return <AlreadyLoggedIn />;
  } else {
    return (
      <div>
        <MentorForm />
      </div>
    );
  }
}

function MentorForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState<Partial<MentorSignUpPayload>>({});

  function updateFields(fields: Partial<MentorSignUpPayload>) {
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
      'SignUp': (data: MentorSignUpPayload, errors: ErrorMessage) => {
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
          <ProgressBarStep key={index} stepName={stepName} index={index} currentStepIndex={currentStepIndex} />
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
