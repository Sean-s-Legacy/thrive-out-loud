import React from 'react'

type LocationData = {
  user_location: string;
}
type LocationProps = LocationData &{
  updateFields: (fields: Partial<LocationData>) => void;
}

export default function Location({user_location, updateFields}: LocationProps){
  return(
    <div>
      <h3>Where are you currently <span>located</span>?</h3>
      <p>Thrive Out Loud currently only supports mentorship within the United States. We hope to expand our program in the future!</p>
      <label>Location</label>
      <input type="text" autoFocus required placeholder='City, State' value={user_location} onChange={e => updateFields({user_location: e.target.value})} />
    </div>
  )
}
