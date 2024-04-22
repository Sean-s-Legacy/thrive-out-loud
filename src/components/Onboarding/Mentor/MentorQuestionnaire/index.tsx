import React, { FormEvent, useState, useEffect} from 'react';
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
import {useAuth} from '@/context/AuthContext';
import AlreadyLoggedIn from '@/components/Errors/AlreadyLoggedIn';
import {Button} from 'antd';
import SignUpModal from '@/components/auth/SignUp';

import { validateChosenName, validateLocation, validateGenderIdentity, validateSexualOrientation, validateEthnicityAndLanguage, validateIndustry, validateFocusArea } from '@/utils/validationRules';

const INITIALDATA: MentorSignUpPayload = {
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
}

interface ErrorMessage {
  [key: string]: string[] | undefined;
}

export default function MentorQuestionnaire() {

  const { currentUser } = useAuth();
  if (currentUser) {
    return (
      <AlreadyLoggedIn />
    )
  } else {
    return (
      <div>
        <MentorForm />
      </div>
    )
  }
}
function MentorForm() {
  const [data, setData] = useState(INITIALDATA);
  const [errors, setErrors] = useState<Partial<MentorSignUpPayload>>({});

  function updateFields(fields: Partial<MentorSignUpPayload>) {
    setData(prev => {
      return { ...prev, ...fields }
    });
  }

  function previousStep(){
    prev();
    setErrors({});
  }

  const { steps, currentStepIndex, step, next, prev, isFirstStep, isLastStep } = useMultistepForm([

  <NameAndPronouns
  key="Chosen Name"
  {...data}
  updateFields = {updateFields}
  errorMessage = {errors}
  />,
  <Location
  key="Location"
  {...data}
  updateFields = {updateFields}
  errorMessage = {errors}
  />,
  <GenderIdentity
  key="Gender Identity"
  {...data}
  updateFields = {updateFields}
  errorMessage = {errors}
  />,
  <SexualOrientation
  key="Sexual Orientation"
  {...data}
  updateFields = {updateFields}
  errorMessage = {errors}
  />,
  <EthnicityAndLanguages
  key="Ethnicity & Language"
  {...data}
  updateFields = {updateFields}
  errorMessage = {errors}
  />,
  <Industry
  key="Industry"
  {...data}
  updateFields = {updateFields}
  errorMessage = {errors}
  />,
  <FocusArea
  key="Focus Area"
  {...data}
  updateFields = {updateFields}
  errorMessage = {errors}
  />,
  <SignUpModal key={"login"} {...data}  updateFields = {updateFields}/>

  ]);

  const { signUp } = useAuth();

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    // Initialize errors object that will store error messages for each field and then be used to set new errors state
    const newErrors: ErrorMessage = {};

    // Define validation rules for each step (imported from utils/validationRules.ts)
    const validationRules: { [key: string]: Function } = {
      'Chosen Name': validateChosenName,
      'Location': validateLocation,
      'Gender identity': validateGenderIdentity,
      'Sexual Orientation': validateSexualOrientation,
      'Ethnicity & Language': validateEthnicityAndLanguage,
      'Industry': validateIndustry,
      'Focus Area': validateFocusArea,
    };

    // Get the current step key
    const currentStepKey = (steps)[currentStepIndex].key;
    // Validate fields for the current step, and adds errors to newErrors object:
    if (validationRules[currentStepKey]) {
      validationRules[currentStepKey](data, newErrors);
    // if there are errors, set the errors state and return
      if (Object.keys(newErrors).length>0) {
        setErrors(newErrors);
        return;
      }
    }
    // If there are no errors, move to the next step or submit the form data
    if (!isLastStep){
      setErrors({});
      return next();
    }
    // Submit the form data to Firebase
    signUp(data);
  }

  return (
    <div className={styles.questionnaireContainer}>
      <div className = {styles.onboardingProgress}>
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
