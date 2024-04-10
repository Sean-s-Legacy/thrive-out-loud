import React, { FormEvent, useState} from 'react';
import { useMultistepForm } from 'functions/src/utils/useMultistepform';

import NameAndPronouns from '@/components/Onboarding/NameAndPronouns';
import Location from '@/components/Onboarding/Location';
import Industry from '@/components/Onboarding/Industry';

import { MenteeSignUpPayLoad } from 'functions/src/user/structs';

import { useAuth } from "../context/AuthContext";
import AlreadyLoggedIn from '@/components/Errors/AlreadyLoggedIn';
import SignUpModal from '@/components/auth/SignUp';
import {Button} from 'antd';
import { setCommentRange } from 'typescript';

// Define the initial data for the form - add to this as we add more fields to onboarding
const INITIALDATA: MenteeSignUpPayLoad = {
  user_name_first: '',
  user_name_last: '',
  user_chosen_name: '',
  user_pronouns: '',
  user_date_of_birth: '',
  user_location: '',
  user_industry: [],
  user_email: '',
  user_pswd: ''
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
    <NameAndPronouns key="nameAndPronouns" {...data} updateFields = {updateFields}/>,
    <Location key="location" {...data} updateFields = {updateFields} />,
    <Industry key="industry" {...data} updateFields = {updateFields} checkboxError={checkboxError}/>,
    <SignUpModal key={"login"} {...data}  updateFields = {updateFields}/>
  ]);

  const { signUp } = useAuth();

  function onSubmit(e:FormEvent) {
    e.preventDefault();
    // If in the industry step, check if user has selected at least one checkbox
    if (!isLastStep && steps[currentStepIndex].key === "industry" && data.user_industry.length === 0) {
      setCheckboxError('Please select at least one checkbox');
      return;
    }
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
