import React, { FormEvent, useState, useEffect} from 'react';
import { useMultistepForm } from 'functions/src/utils/useMultistepform';

import NameAndPronouns from '@/components/Onboarding/NameAndPronouns';
import Location from '@/components/Onboarding/Location';
import Industry from '@/components/Onboarding/Industry';
import FocusArea from '@/components/Onboarding/FocusArea';
import GenderIdentity from '@/components/Onboarding/GenderIdentity';
import SexualOrientation from '@/components/Onboarding/SexualOrientation';
import EthnicityAndLanguages from '@/components/Onboarding/EthnicityAndLanguage';

import ProgressBarStep from '@/components/Onboarding/ProgressBarStep';

import { MenteeSignUpPayLoad } from 'functions/src/user/structs';

import { useAuth } from "@/context/AuthContext";
import AlreadyLoggedIn from '@/components/Errors/AlreadyLoggedIn';
import SignUpModal from '@/components/auth/SignUp';
import {Button} from 'antd';
import Title from 'antd/lib/typography/Title';

import styles from './MenteeQuestionnaire.module.css';
import MENTEE_ONBOARDING_CONTENT from '@/utils/OnboardingContent';

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
    key="chosen name"
    {...data}
    updateFields = {updateFields}
    errorMessage = {errors}
    />,
    <Location
    key="location"
    {...data}
    updateFields = {updateFields}
    errorMessage = {errors}
    />,
    <GenderIdentity
    key="gender identity"
    {...data}
    updateFields = {updateFields}
    errorMessage = {errors}
    />,
    <SexualOrientation
    key="sexual orientation"
    {...data}
    updateFields = {updateFields}
    errorMessage = {errors}
    />,
    <EthnicityAndLanguages
    key="ethnicity & language"
    {...data}
    updateFields = {updateFields}
    errorMessage = {errors}
    />,
    <Industry
    key="industry"
    {...data}
    updateFields = {updateFields}
    errorMessage = {errors}
    />,
    <FocusArea
    key="focus area"
    {...data}
    updateFields = {updateFields}
    errorMessage = {errors}
    />,
    <SignUpModal key={"login"} {...data}  updateFields = {updateFields}/>
  ]);

  const { signUp } = useAuth();


function onSubmit(e:FormEvent) {
  e.preventDefault();
  // Check for errors in the form and make sure every field is filled out
  const errors: ErrorMessage = {};
  if (currentStepIndex === 0) {
    if (!data.user_chosen_name) errors.user_chosen_name = ['Please enter your first name.'];
    if (!data.user_pronouns) errors.user_pronouns = ['Please enter your pronouns.'];
    if (!data.user_date_of_birth) errors.user_date_of_birth = ['Please enter your date of birth.'];
    if (errors.user_chosen_name || errors.user_pronouns || errors.user_date_of_birth) {
      setErrors(errors);
      return;
    }
  }
  if (currentStepIndex === 1) {
    if (!data.user_location) errors.user_location = ['Please enter your location.'];
    if (errors.user_location) {
      setErrors(errors);
      return;
    }
  }
  if (currentStepIndex === 2) {
    if (data.user_gender_identity.length===0) errors.user_gender_identity = ['Please select at least one gender identity.'];
    if (errors.user_gender_identity) {
      setErrors(errors);
      return;
    }
  }
  if (currentStepIndex === 3) {
    if (data.user_sexual_orientation.length===0) errors.user_sexual_orientation = ['Please select at least one sexual orientation.'];
    if (errors.user_sexual_orientation) {
      setErrors(errors);
      return;
    }
  }
  if (currentStepIndex === 4) {
    if (data.user_ethnicity.length===0) errors.user_ethnicity = ['Please select at least one ethnicity.'];
    if (data.user_language.length===0) errors.user_language = ['Please select at least one language.'];
    if (errors.user_ethnicity || errors.user_language) {
      setErrors(errors);
      return;
    }
  }
  if (currentStepIndex === 5) {
    if (data.user_industry.length===0) errors.user_industry = ['Please select at least one industry.'];
    if (errors.user_industry) {
      setErrors(errors);
      return;
    }
  }
  if (currentStepIndex === 6) {
    if (data.user_focus_area.length===0) errors.user_focus_area = ['Please select at least one focus area.'];
    if (errors.user_focus_area) {
      setErrors(errors);
      return;
    }
  }

  // Proceed with form submission only if there are no errors
  console.log(data)
  if (!isLastStep) return next();
  setErrors({});
  // Submit the form data to Firebase
  console.log(data);
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
