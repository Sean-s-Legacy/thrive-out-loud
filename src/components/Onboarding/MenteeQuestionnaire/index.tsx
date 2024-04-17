import React, { FormEvent, useState} from 'react';
import { useMultistepForm } from 'functions/src/utils/useMultistepform';

import MENTEE_ONBOARDING_CONTENT from '@/utils/OnboardingContent';
import OnboardingStep from '@/components/Onboarding/OnboardingStep';

import ProgressBarStep from '@/components/Onboarding/ProgressBarStep';

import { MenteeSignUpPayLoad } from 'functions/src/user/structs';

import { useAuth } from "@/context/AuthContext";
import AlreadyLoggedIn from '@/components/Errors/AlreadyLoggedIn';
import SignUpModal from '@/components/auth/SignUp';
import {Button} from 'antd';
import { setCommentRange } from 'typescript';

import styles from './MenteeQuestionnaire.module.css';

// Define the initial data for the form - add to this as we add more fields to onboarding
const INITIALDATA: MenteeSignUpPayLoad = {
  user_name_first: '',
  user_name_last: '',
  user_chosen_name: '',
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
  // Set an error in onSubmit to be displayed if a user tries to submit a step without selecting any checkboxes.
  // Pass checkboxError as prop to steps with checkboxes.
  const [checkboxError, setCheckboxError] = useState<string>('');

  function updateFields(fields: Partial<MenteeSignUpPayLoad>) {
    setData(prev => {
      return { ...prev, ...fields }
    });
  }

  const { steps, currentStepIndex, step, next, prev, isFirstStep, isLastStep } = useMultistepForm([

    <OnboardingStep
    key="Name & Pronouns"
    {...MENTEE_ONBOARDING_CONTENT.chosenName}
    title={MENTEE_ONBOARDING_CONTENT.chosenName.title}
    description={MENTEE_ONBOARDING_CONTENT.chosenName.description}
    inputs={MENTEE_ONBOARDING_CONTENT.chosenName.inputs}
    data={data}
    updateFields={updateFields} />,

    <OnboardingStep
    key="Location"
    {...MENTEE_ONBOARDING_CONTENT.location}
    title={MENTEE_ONBOARDING_CONTENT.location.title}
    description={MENTEE_ONBOARDING_CONTENT.location.description}
    inputs={MENTEE_ONBOARDING_CONTENT.location.inputs}
    data={data}
    updateFields={updateFields} />,

    <OnboardingStep
    key="Gender Identity"
    {...MENTEE_ONBOARDING_CONTENT.genderIdentity}
    title={MENTEE_ONBOARDING_CONTENT.genderIdentity.title}
    description={MENTEE_ONBOARDING_CONTENT.genderIdentity.description}
    inputs = {MENTEE_ONBOARDING_CONTENT.genderIdentity.inputs}
    data={data}
    updateFields={updateFields} />,

    <OnboardingStep
    key="Sexual Orientation"
    {...MENTEE_ONBOARDING_CONTENT.sexualOrientation}
    title={MENTEE_ONBOARDING_CONTENT.sexualOrientation.title}
    description={MENTEE_ONBOARDING_CONTENT.sexualOrientation.description}
    inputs = {MENTEE_ONBOARDING_CONTENT.sexualOrientation.inputs}
    data={data}
    updateFields={updateFields} />,

    <OnboardingStep
    key="Ethnicity & Language"
    {...MENTEE_ONBOARDING_CONTENT.ethnicityAndLanguage}
    title={MENTEE_ONBOARDING_CONTENT.ethnicityAndLanguage.title}
    description={MENTEE_ONBOARDING_CONTENT.ethnicityAndLanguage.description}
    inputs = {MENTEE_ONBOARDING_CONTENT.ethnicityAndLanguage.inputs}
    subQuestion={MENTEE_ONBOARDING_CONTENT.ethnicityAndLanguage.subQuestion}
    data={data}
    updateFields={updateFields} />,

    <OnboardingStep
    key="Industry"
    {...MENTEE_ONBOARDING_CONTENT.industry}
    title={MENTEE_ONBOARDING_CONTENT.industry.title}
    description={MENTEE_ONBOARDING_CONTENT.industry.description}
    inputs = {MENTEE_ONBOARDING_CONTENT.industry.inputs}
    data={data}
    updateFields={updateFields} />,

    <OnboardingStep
    key="Focus area"
    {...MENTEE_ONBOARDING_CONTENT.focus_area}
    title={MENTEE_ONBOARDING_CONTENT.focus_area.title}
    description={MENTEE_ONBOARDING_CONTENT.focus_area.description}
    inputs = {MENTEE_ONBOARDING_CONTENT.focus_area.inputs}
    data={data}
    updateFields={updateFields} />,

    <SignUpModal key={"Email & Password"} {...data}  updateFields = {updateFields}/>
  ]);

  const { signUp } = useAuth();

  // Check if user has selected at least one checkbox, and set an error if they haven't
  const checkCheckboxSelection = (stepKey: string, dataArray: string[]) => {
    if (!isLastStep && steps[currentStepIndex].key === stepKey && dataArray.length === 0) {
      setCheckboxError(`Please select at least one ${stepKey}.`);
      return true;
    }
    return false;
  };

  function onSubmit(e:FormEvent) {
    e.preventDefault();
    // If in the industry or focusArea step, check if user has selected at least one checkbox
    // if (checkCheckboxSelection("Industry", data.user_industry) || checkCheckboxSelection("Focus area", data.user_focus_area)) {
    //   return;
    // }
    // console.log(data)
    // // Clear the error if the user has selected at least one checkbox
    // setCheckboxError('')
    console.log(data)
    if (!isLastStep) return next();
    // Submit the form data to Firebase
    console.log(data)
    signUp(data);
  }

  return (
    <div className={styles.questionnaireContainer}>
      <div className = {styles.onboardingProgress}>
        <h3>Match Questionnaire</h3>
        {steps.map((stepName, index) => (
          <ProgressBarStep key={index} stepName={stepName} index={index} currentStepIndex={currentStepIndex}/>
        ))}
      </div>
      <div className={styles.onboardingForm}>
        <form onSubmit={onSubmit}>
          {step}
          <div>
            {!isFirstStep && (
              <button type="button" onClick={prev}>
                Back
              </button>
            )}
            <button type="submit">
              {isLastStep ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
