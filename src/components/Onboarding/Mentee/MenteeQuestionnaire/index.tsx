import React, { FormEvent, useState, useEffect} from 'react';
import { useMultistepForm } from 'functions/src/utils/useMultistepform';

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
import SignUpModal from '@/components/auth/SignUp';
import {Button} from 'antd';

import { validateChosenName, validateLocation, validateGenderIdentity, validateSexualOrientation, validateEthnicityAndLanguage, validateIndustry, validateFocusArea } from '@/utils/validationRules';
import styles from './MenteeQuestionnaire.module.css';


// Define the initial data for the form - add to this as we add more fields to onboarding
const INITIALDATA: MenteeSignUpPayLoad = {
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
  user_role: 'mentee'
}

interface ErrorMessage {
  [key: string]: string[] | undefined;
}

export default function MenteeQuestionnaire() {

  const { currentUser } = useAuth();
  if (currentUser) {
    return (
      <AlreadyLoggedIn />
    )
  } else {
    return (
      <div>
        <MenteeForm />
      </div>
    );
  }
}

function MenteeForm() {

  const [data, setData] = useState(INITIALDATA);
  const [errors, setErrors] = useState<Partial<MenteeSignUpPayLoad>>({});

  function updateFields(fields: Partial<MenteeSignUpPayLoad>) {
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


function onSubmit(e:FormEvent) {
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
