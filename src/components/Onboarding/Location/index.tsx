import React from 'react'
import Title from 'antd/lib/typography/Title';
import InputWrapper from '@/components/InputWrapper';

type LocationData = {
  user_location: string;
}
type LocationProps = LocationData &{
  updateFields: (fields: Partial<LocationData>) => void;
  errorMessage: {};
}

export default function Location({user_location, errorMessage, updateFields}: LocationProps){
  return(
    <div>
      <Title level={3} className="semibold">
        Where are you currently <span style={{color:'var(--primary7)'}}>located</span>?
      </Title>
      <p>Thrive Out Loud currently only supports mentorship within the United States. We hope to expand our program in the future!</p>
      <InputWrapper
        label="City, State"
        placeholder="City, State"
        value={user_location}
        onChange={e => updateFields({user_location: e.target.value})}
        required
        className={""}
        size="large"
      />
      {errorMessage && errorMessage['user_location'] && <p className="error-message">{errorMessage['user_location']}</p>}
    </div>
  )
}
