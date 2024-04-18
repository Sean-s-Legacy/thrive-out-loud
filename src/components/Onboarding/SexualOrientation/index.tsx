import React from 'react';
import SEXUAL_ORIENTATIONS from '@/utils/SexualOrientations';
import { Select } from 'antd';
import { SelectProps } from 'antd';
import Title from 'antd/lib/typography/Title';

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
    <Title level={3} className="semibold">
      What is your <span style={{ color:"var(--primary7)" }}>sexual orientation</span>?
    </Title>
    <p>Your sexual orientation will be displayed on your profile to help mentees with similar orientations find you. We won’t share your personal information with anyone else.</p>
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
    </>
  )
}
