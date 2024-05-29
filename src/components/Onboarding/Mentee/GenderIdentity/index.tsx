import React, { useEffect, useState } from 'react';
import GENDER_IDENTITIES from '@/utils/GenderIdentities';
import { Select } from 'antd';
import { SelectProps } from 'antd';
import Title from 'antd/lib/typography/Title';
import CustomTooltip from '@/components/Tooltip';
import OnboardingCheckbox from '../../OnboardingCheckbox';
import InputWrapper from '@/components/InputWrapper';

const options: SelectProps['options'] = GENDER_IDENTITIES.map(gender => ({
  label: gender,
  value: gender.toLowerCase()
}));

type GenderIdentityData = {
  user_gender_identity: string[];
  user_match_on_gender_identity: boolean;
}

type GenderIdentityProps = GenderIdentityData & {
  updateFields: (fields: Partial<GenderIdentityData>) => void;
  errorMessage: {};
}

export default function GenderIdentity({ user_gender_identity, user_match_on_gender_identity, errorMessage, updateFields }: GenderIdentityProps) {
  const [notListedInput, setNotListedInput] = useState(false);
  const [customText, setCustomText] = useState('');

  useEffect(() => {
    setNotListedInput(user_gender_identity.includes('my gender identity is not listed'));
  }, [user_gender_identity]);


  const handleSelectChange = (value: string[]) => {
    if (!value.includes('my gender identity is not listed')) {
      setCustomText('');
    }
    console.log(user_gender_identity)
    updateFields({ user_gender_identity: value });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (customText && !user_gender_identity.includes(customText)) {
        updateFields({ user_gender_identity: [...user_gender_identity, customText] });
      }
      setCustomText("")
    }
  };

  const handleBlur = () => {
    if(customText && !user_gender_identity.includes(customText)){
      updateFields({ user_gender_identity: [...user_gender_identity, customText] })
    }
    setCustomText("")
    console.log(user_gender_identity)
  };

  return (
    <>
      <div className='onboarding-title-container'>
        <Title level={3} className="semibold">
          What is your <span style={{ color: "var(--primary7)" }}>gender identity</span>?
        </Title>
        <CustomTooltip
          title="Gender identity refers to your deeply-felt sense of self, which may or may not align with the sex assigned to you at birth. Gender identity is a spectrum and represents how someone perceives themselves as feminine, masculine, both, or neither."
        />
      </div>
      <p className='subtitle-regular'>Knowing how you identify helps us connect you with mentors with similar identities. We won’t share your personal information with anyone else.</p>
      <p>Select all that apply</p>
      <Select
        mode="multiple"
        allowClear
        placeholder="Select"
        options={options}
        onChange={handleSelectChange}
        style={{ width: '100%' }}
        value={user_gender_identity}
      />
      {errorMessage && errorMessage['user_gender_identity'] && (
        <p className="error-message">
          <img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_gender_identity']}
        </p>
      )}
      {notListedInput && (
        <div style={{ margin: '15px 0px'}}>
        <InputWrapper
          label="My gender identity is not listed"
          placeholder="Enter your gender identity"
          value={customText}
          optional
          style={{ margin: '15px 0px'}}
          size
          onChange={e => setCustomText(e.target.value)}
          className={""}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
        />
        </div>
      )}
      <OnboardingCheckbox
        checked={user_match_on_gender_identity}
        onChange={e => updateFields({ user_match_on_gender_identity: e.target.checked })}
        content="I would prefer to find a mentor with a similar gender identity to me."
      />

    </>
  );
}
