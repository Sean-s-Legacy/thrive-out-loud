import React, { FormEvent, useState} from 'react';
import { useMultistepForm } from 'functions/src/utils/useMultistepform';

import NameAndPronouns from '@/components/Onboarding/NameAndPronouns';
import Location from '@/components/Onboarding/Location';
import Industry from '@/components/Onboarding/Industry';
import FocusArea from '@/components/Onboarding/FocusArea';
import GenderIdentity from '@/components/Onboarding/GenderIdentity';
import EthnicityAndLanguages from '@/components/Onboarding/EthnicityAndLanguage';

import { MenteeSignUpPayLoad } from 'functions/src/user/structs';

import { useAuth } from "../context/AuthContext";
import AlreadyLoggedIn from '@/components/Errors/AlreadyLoggedIn';
import SignUpModal from '@/components/auth/SignUp';
import {Button} from 'antd';
import { setCommentRange } from 'typescript';
import SexualOrientation from '@/components/Onboarding/SexualOrientation';

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
  user_ethnicity: [],
  user_match_on_ethnicity: false,
  user_language: [],
  user_sexual_orientation: [],
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
    // NB: key is used for checkbox error messages
    <NameAndPronouns key="chosen name" {...data} updateFields = {updateFields}/>,
    <Location key="location" {...data} updateFields = {updateFields} />,
    <GenderIdentity key="gender identity" {...data} updateFields = {updateFields} />,
    <SexualOrientation key="sexual orientation" {...data} updateFields = {updateFields} />,
    <EthnicityAndLanguages key="ethnicity & language" {...data} updateFields = {updateFields} />,
    <Industry key="industry" {...data} updateFields = {updateFields} checkboxError={checkboxError}/>,
    <FocusArea key="focus area" {...data} updateFields = {updateFields} checkboxError={checkboxError}/>,
    <SignUpModal key={"login"} {...data}  updateFields = {updateFields}/>
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
    if (checkCheckboxSelection("industry", data.user_industry) || checkCheckboxSelection("focus area", data.user_focus_area)) {
      return;
    }
    console.log(data)
    // Clear the error if the user has selected at least one checkbox
    setCheckboxError('')
    if (!isLastStep) return next();
    // Submit the form data to Firebase
    console.log(data)
    signUp(data);
  }

  return (
    <div>
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
  );
}
