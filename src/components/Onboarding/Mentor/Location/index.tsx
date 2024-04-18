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
      <p className='subtitle-regular'>Providing your location enables us to pair you with mentors who are in a similar timezone or from nearby communities.</p>
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
