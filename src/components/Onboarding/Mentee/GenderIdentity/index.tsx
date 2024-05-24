import React from 'react';
import GENDER_IDENTITIES from '@/utils/GenderIdentities';
import { Select } from 'antd';
import { SelectProps } from 'antd';
import Title from 'antd/lib/typography/Title';
import CustomTooltip from '@/components/Tooltip';
import OnboardingCheckbox from '../../OnboardingCheckbox';

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
  return (
    <>
      <div className='onboarding-title-container'>
        <Title level={3} className="semibold">
          What is your <span style={{ color:"var(--primary7)" }}>gender identity</span>?
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
        onChange={value => updateFields({ user_gender_identity: value })}
        style={{ width: '100%' }}
        value={user_gender_identity}
      />
      {errorMessage && errorMessage['user_gender_identity'] && (
        <p className="error-message">
          <img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_gender_identity']}
        </p>
      )}
      <OnboardingCheckbox
        checked={user_match_on_gender_identity}
        onChange={e => updateFields({ user_match_on_gender_identity: e.target.checked })}
        content="I would prefer to find a mentor with a similar gender identity to me."
      />
    </>
  );
}
