import React from 'react';
import SEXUAL_ORIENTATIONS from '@/utils/SexualOrientations';
import { Select } from 'antd';
import { SelectProps } from 'antd';
import Title from 'antd/lib/typography/Title';
import CustomTooltip from '@/components/Tooltip';
import OnboardingCheckbox from '../../OnboardingCheckbox';

const options: SelectProps['options'] = SEXUAL_ORIENTATIONS.map(orientation => ({
  label: orientation,
  value: orientation.toLowerCase()
}))

type SexualOrientationData = {
  user_sexual_orientation: string[];
}

type SexualOrientationProps = SexualOrientationData & {
  updateFields: (fields: Partial<SexualOrientationData>) => void;
  errorMessage: {};
}

export default function SexualOrientation({user_sexual_orientation, errorMessage, updateFields}: SexualOrientationProps) {
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
    <p className='subtitle-regular'>This information is visible to mentees. Sharing it helps mentees with similar identities find you. We won’t share it with anyone else.</p>
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
    {errorMessage && errorMessage['user_sexual_orientation'] && <p className="error-message"> <img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_sexual_orientation']}</p>}
    </>
  )
}
