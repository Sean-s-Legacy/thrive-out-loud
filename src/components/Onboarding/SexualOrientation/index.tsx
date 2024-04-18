import React from 'react';
import SEXUAL_ORIENTATIONS from '@/utils/SexualOrientations';
import { Select } from 'antd';
import { SelectProps } from 'antd';
import Title from 'antd/lib/typography/Title';
import CustomTooltip from '@/components/Tooltip';
import OnboardingCheckbox from '../OnboardingCheckbox';

const options: SelectProps['options'] = SEXUAL_ORIENTATIONS.map(orientation => ({
  label: orientation,
  value: orientation.toLowerCase()
}))

type SexualOrientationData = {
  user_sexual_orientation: string[];
  user_match_on_sexual_orientation: boolean;
}

type SexualOrientationProps = SexualOrientationData & {
  updateFields: (fields: Partial<SexualOrientationData>) => void;
  errorMessage: {};
}

export default function SexualOrientation({user_sexual_orientation, user_match_on_sexual_orientation, errorMessage, updateFields}: SexualOrientationProps) {
  return (
    <>
    <div className='onboarding-title-container'>
    <Title level={3} className="semibold">
      What is your <span style={{ color:"var(--primary7)" }}>sexual orientation</span>?
    </Title>
    <CustomTooltip
    title="Sexual orientation refers to who you’re attracted to romantically, sexually, or emotionally. It can be fluid, meaning you may have multiple or changing orientations over time."
    />
    </div>
    <p className='subtitle-regular'>Knowing your orientation helps us connect you with  mentors with similar life experience. We won’t share your personal information with anyone else.</p>
    <p>Select all that apply</p>
    <Select
      mode="multiple"
      allowClear
      placeholder="Select"
      options={options}
      onChange={value => updateFields({user_sexual_orientation: value})}
      style={{ width: '100%' }}
      value={user_sexual_orientation}
    />
    {errorMessage && errorMessage['user_sexual_orientation'] && <p className="error-message">{errorMessage['user_sexual_orientation']}</p>}
    <OnboardingCheckbox
      checked = {user_match_on_sexual_orientation}
      onChange={e=> updateFields({user_match_on_sexual_orientation: e.target.checked})}
      content = "I would prefer to find a mentor with a similar sexual orientation as me."
    />
    </>
  )
}
