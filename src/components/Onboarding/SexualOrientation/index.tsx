import React from 'react';
import SEXUAL_ORIENTATIONS from '@/utils/SexualOrientations';
import { Select } from 'antd';
import { SelectProps } from 'antd';

const options: SelectProps['options'] = SEXUAL_ORIENTATIONS.map(orientation => ({
  label: orientation,
  value: orientation.toLowerCase()
}))

type SexualOrientationData = {
  user_sexual_orientation: string[];
}

type SexualOrientationProps = SexualOrientationData & {
  updateFields: (fields: Partial<SexualOrientationData>) => void;
}

export default function SexualOrientation({user_sexual_orientation, updateFields}: SexualOrientationProps) {
  return (
    <>
    <h3>What is your <span>sexual orientation</span>?</h3>
    <p>Your sexual orientation will be displayed on your profile to help mentees with similar orientations find you. We won’t share your personal information with anyone else.</p>
    <Select
      mode="multiple"
      allowClear
      placeholder="Select"
      options={options}
      onChange={value => updateFields({user_sexual_orientation: value})}
      style={{ width: '100%' }}
    />
    </>
  )
}
