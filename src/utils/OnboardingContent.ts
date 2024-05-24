import { error } from 'console';
import GENDER_IDENTITIES from './GenderIdentities';
import INDUSTRIES from './Industries';
import ETHNICITIES from './Ethnicities';
import LANGUAGES from './Languages';
import SEXUAL_ORIENTATIONS from './SexualOrientations';
import { USER_FIELDS } from 'functions/src/utils/firestore';
import FOCUS_AREAS from './FocusAreas';
import SexualOrientation from '@/components/Onboarding/Mentee/SexualOrientation';


const MENTEE_ONBOARDING_CONTENT = {
  nameAndPronouns: {
    title: "Tell us a bit about yourself so we can help mentees find you on Thrive Out Loud.",
    description: "Tell us a bit about yourself so we can help mentors find you on Thrive Out Loud.",
    chosenNameInput:
      {inputLabel: "Chosen name",
      tooltip: "Chosen name refers to the name that you use in your daily life, which may or may not be related to your legal first, middle, and last name.",
      type: "text",
      placeholder: "Nala Goins",
      value: USER_FIELDS.CHOSEN_NAME,
      required: true
      },
    pronounsInput:
      {inputLabel: "Pronouns",
      tooltip: "Personal pronouns are the words that you use to refer to yourself in place of your name. Pronouns can include combinations of common words such as he/him, she/her, and they/them or be made up of words of your own creation.",
      type: "text",
      placeholder: "she/her/hers",
      value: USER_FIELDS.PRONOUNS,
      required: true
      },
    dateOfBirthInput:
      {inputLabel: "Date of Birth",
      type: "date",
      placeholder: "Select date",
      value: USER_FIELDS.DATE_OF_BIRTH,
      required: true
      }
  },
  location: {
    title: "Where are you currently located?",
    description: "Providing your location enables us to pair you with mentors who are in a similar timezone or from nearby communities.",
    locationInput:{
      inputLabel: "Location",
      type: "text",
      placeholder: "City, State",
      value: USER_FIELDS.LOCATION,
      required: true
    }
  },
  genderIdentity: {
    title: "What is your gender identity?",
    tooltip: "Gender identity refers to your deeply-felt sense of self, which may or may not align with the sex assigned to you at birth. Gender identity is a spectrum and represents how someone perceives themselves as feminine, masculine, both, or neither.",
    description: "Knowing how you identify helps us connect you with mentors with similar identities. We won’t share your personal information with anyone else.",
    genderIdentityInput:{
      instructions: "Select all that apply",
      type: "select",
      options: GENDER_IDENTITIES,
      value: USER_FIELDS.GENDER_IDENTITY,
      required: true
    },
    matchOnGenderIdentity: {
      explainer: "I would prefer to find a mentor with a similar gender identity to me.",
      value: USER_FIELDS.MATCH_ON_GENDER_IDENTITY,
      required: false
    }
  },
  sexualOrientation: {
    title: "Which sexual orientation(s) best describe you?",
    tooltip: "Sexual orientation refers to who you’re attracted to romantically, sexually, or emotionally. It can be fluid, meaning you may have multiple or changing orientations over time. ",
    description: "Knowing your orientation helps us connect you with  mentors with similar life experience. We won’t share your personal information with anyone else.",
    sexualOrientationInput:
      {
      instructions: "Select all that apply",
      type: "select",
      options: SEXUAL_ORIENTATIONS,
      value: USER_FIELDS.SEXUAL_ORIENTATION,
      required: true
    },
   matchOnSexualOrientation:{
      explainer: "I would prefer to find a mentor with a similar sexual orientation as me.",
      value: USER_FIELDS.MATCH_ON_SEXUAL_ORIENTATION,
      required: false
    }
  },
  ethnicityAndLanguage: {
    ethnicity:{
      title: "Which race or ethnic background(s) best describes you?",
      tooltip: "Your race relates to biological characteristics as well as sociopolitical aspects of identity, while ethnicity encompasses cultural factors like ancestry and traditions. Sometimes these overlap, contributing to your unique life experience.",
      description: "Knowing your background helps us connect you with mentors with similar life experience.",
      ethnicityInput: {
          instructions: "Select all that apply",
          type: "select",
          options: ETHNICITIES,
          value: USER_FIELDS.ETHNICITY,
          required: true
        },
      matchOnEthnicity:{
        explainer: "I would prefer to find a mentor with a similar race or ethnic background as me.",
        value: USER_FIELDS.MATCH_ON_ETHNICITY,
        required: false
      },
    },
    language:{
      title: "What languages do you speak?",
      description: "Please note that English is the default language for our site, but some of our mentors speak other languages.",
      languageInput:{
        instructions: "Select all that apply",
        type: "select",
        options: LANGUAGES,
        value: USER_FIELDS.LANGUAGE,
        required: true
      }
    }
  },
  industry: {
    title: "Which industries are you interested in?",
    description: "We’ll match you with mentors who are experts the industry and eager to support your professional development.",
    industryInput:{
      instructions: "Select all that apply (3 max)",
      type: "checkbox",
      options: INDUSTRIES,
      value: USER_FIELDS.INDUSTRY,
      required: true
    }
  },
  focusArea:{
    title: "Are you looking for support in a specific area of focus?",
    description: "We’ll match you with a mentor who can support you with this.",
    focusAreaInput:{
      instructions: "Select all that apply",
      type: "checkbox",
      options: FOCUS_AREAS,
      value: USER_FIELDS.FOCUS_AREA,
      required: true
    }
  }
}

const ONBOARDING_ERROR_MESSAGES = {
  chosenName: "Please provide us a name to refer to you.",
  pronouns: "Please provide us with your pronouns.",
  dateOfBirth: "Please enter your date of birth.",
  location: "Please enter a city and state in the United States.",
  genderIdentity: "Please select at least one gender identity.",
  sexualOrientation: "Please select at least one orientation.",
  ethnicity: "Please select at least one race or ethnic background.",
  language: "Please select at least one language.",
  industry: "Please select at least one industry.",
  focusArea: "Please provide at least one focus area.",
  email: "Please enter a valid email address.",
  password: "Please use at least 8 characters.",
}

export default MENTEE_ONBOARDING_CONTENT;
export { ONBOARDING_ERROR_MESSAGES };
