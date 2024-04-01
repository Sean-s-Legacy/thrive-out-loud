import React, { FormEvent, useState} from 'react';
import { useMultistepForm } from 'functions/src/utils/useMultistepform';
import NameAndPronouns from '@/components/Onboarding/NameAndPronouns';
import Location from '@/components/Onboarding/Location';
import { useAuth } from "../context/AuthContext";
import NotLoggedIn from '@/components/Errors/NotLoggedIn';

// Define the form data - add to this as we add more fields to onboarding
type FormData = {
  chosenName: string;
  pronouns: string;
  dateOfBirth: Date | null;
  location: string;
}

// Define the initial data for the form - add to this as we add more fields to onboarding
const INITIALDATA:FormData = {
  chosenName: '',
  pronouns: '',
  dateOfBirth: null,
  location: ''
}

export default function MenteeQuestionnaire() {

  const { currentUser } = useAuth();
  if (!currentUser) {
    return (
      <NotLoggedIn />
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

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    });
  }

  const { steps, currentStepIndex, step, next, prev, isFirstStep, isLastStep } = useMultistepForm([
    <NameAndPronouns key="nameAndPronouns" {...data} updateFields = {updateFields}/>,
    <Location key="location" {...data} updateFields = {updateFields} />
  ]);

  function onSubmit(e:FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    // Submit the form data to Firebase
    console.log(data)
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
