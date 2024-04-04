import React from 'react'

type UserData ={
  user_chosen_name: string;
  user_pronouns: string;
  user_date_of_birth: string;
}
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
}

export default function NameAnduser_Pronouns({user_chosen_name, user_pronouns, user_date_of_birth, updateFields}: UserFormProps){
  return(
  <div>
    <h3>What <span className='purple-7'>name</span> do you go by?</h3>
    <p> Tell us a bit about yourself so we can help mentees find you on Thrive Out Loud.</p>
    <label>Chosen name</label>
    <input type="text" autoFocus required placeholder='Nala Goins' value={user_chosen_name} onChange={e => updateFields({user_chosen_name: e.target.value})} />
    {/* ADD A TOOLTIP WITH INFO */}
    <label>user_Pronouns</label>
    <input type="text" required placeholder='she/her/hers' value={user_pronouns} onChange={e => updateFields({user_pronouns: e.target.value})}/>
    {/* ADD A TOOLTIP WITH INFO */}
    <label>Date of Birth</label>
    {/* RIGHT NOW THIS INCLUDES TIME - UPDATE TO REMOVE TIME AS CAUSES COMPLICATIONS WITH TIME ZONE */}
    <input type="date" required value={user_date_of_birth ? user_date_of_birth: ''} onChange={e => updateFields({user_date_of_birth: e.target.value})}/>
  </div>
  )
}
