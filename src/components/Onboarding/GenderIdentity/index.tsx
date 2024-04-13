import React from 'react'
import GENDER_IDENTITIES from '@/utils/GenderIdentities'
import { Select } from 'antd'
import { SelectProps } from 'antd'

const options: SelectProps['options'] = GENDER_IDENTITIES.map(gender => ({
  label: gender,
  value: gender.toLowerCase()
}))

type GenderIdentityData = {
  user_gender_identity: string[];
}

type GenderIdentityProps = GenderIdentityData & {
  updateFields: (fields: Partial<GenderIdentityData>) => void;
}

export default function GenderIdentity({user_gender_identity, updateFields}: GenderIdentityProps) {
  return (
    <>
    <h3>What is your <span>gender identity</span>?</h3>
    <p>Your gender identity will be displayed on your profile to help mentees with similar identities find you. We won’t share your personal information with anyone else.</p>
    <Select
      mode="multiple"
      allowClear
      placeholder="Select"
      options={options}
      onChange={value => updateFields({user_gender_identity: value})}
      style={{ width: '100%' }}
    />
    </>
  )
}
