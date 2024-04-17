import React from 'react'
import Title from 'antd/lib/typography/Title';
import InputWrapper from '@/components/InputWrapper';
import DatePicker from 'antd/lib/date-picker';


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
    <Title level={3} className="semibold">
      What <span style={{ color:"var(--primary7)" }}>name</span> do you go by?
    </Title>
    <p> Tell us a bit about yourself so we can help mentees find you on Thrive Out Loud.</p>
    <InputWrapper
      label="Chosen name"
      placeholder="Nala Goins"
      value={user_chosen_name}
      onChange={e => updateFields({user_chosen_name: e.target.value})}
      required
      className={""}
      size = "large"
    />
    {/* ADD A TOOLTIP WITH INFO */}
    <InputWrapper
      label="Pronouns"
      placeholder="she/her/hers"
      value={user_pronouns}
      onChange={e => updateFields({user_pronouns: e.target.value})}
      required
      className={""}
      size = "large"
    />
     {/* ADD A TOOLTIP WITH INFO */}
    <label>Date of Birth</label>
    {/* RIGHT NOW THIS INCLUDES TIME - UPDATE TO REMOVE TIME AS CAUSES COMPLICATIONS WITH TIME ZONE */}
    <input type="date" required value={user_date_of_birth ? user_date_of_birth: ''} onChange={e => updateFields({user_date_of_birth: e.target.value})}/>
  </div>
  )
}
