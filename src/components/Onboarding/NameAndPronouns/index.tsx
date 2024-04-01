import React from 'react'

type UserData ={
  chosenName: string;
  pronouns: string;
  dateOfBirth: Date | null;
}
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
}

export default function NameAndPronouns({chosenName, pronouns, dateOfBirth, updateFields}: UserFormProps){
  return(
  <div>
    <h3>What <span className='purple-7'>name</span> do you go by?</h3>
    <p> Tell us a bit about yourself so we can help mentees find you on Thrive Out Loud.</p>
    <label>Chosen name</label>
    <input type="text" autoFocus required placeholder='Nala Goins' value={chosenName} onChange={e => updateFields({chosenName: e.target.value})} />
    {/* ADD A TOOLTIP WITH INFO */}
    <label>Pronouns</label>
    <input type="text" required placeholder='she/her/hers' value={pronouns} onChange={e => updateFields({pronouns: e.target.value})}/>
    {/* ADD A TOOLTIP WITH INFO */}
    <label>Date of Birth</label>
    {/* RIGHT NOW THIS INCLUDES TIME - UPDATE TO REMOVE TIME AS CAUSES COMPLICATIONS WITH TIME ZONE */}
    <input type="date" required value={dateOfBirth ? dateOfBirth.toISOString().slice(0, 10) : ''} onChange={e => updateFields({dateOfBirth: e.target.valueAsDate})}/>
  </div>
  )
}
