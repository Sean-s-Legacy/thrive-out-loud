import React from 'react'
import ETHNICITIES from '@/utils/Ethnicities'
import LANGUAGES from '@/utils/Languages'
import { Select } from 'antd'
import { SelectProps } from 'antd'
import Title from 'antd/lib/typography/Title'
import CustomTooltip from '@/components/Tooltip'

type EthnicityAndLanguageData = {
  user_ethnicity: string[];
  user_language: string[];
  user_match_on_ethnicity: boolean;
}

type EthnicityAndLanguageProps = EthnicityAndLanguageData & {
  updateFields: (fields: Partial<EthnicityAndLanguageData>) => void;
}

const ethnicityOptions: SelectProps['options'] = ETHNICITIES.map(ethnicity => ({
  label: ethnicity,
  value: ethnicity.toLowerCase()
}))

const languageOptions: SelectProps['options'] = LANGUAGES.map(language => ({
  label: language,
  value: language.toLowerCase()
}))

export default function EthnicityAndLanguages({user_ethnicity, user_language, user_match_on_ethnicity, updateFields}: EthnicityAndLanguageProps){
  return (
    <>
    <div>
      <Title level={3} className="semibold">
        Which <span style={{ color:"var(--primary7)" }}>race or ethnic background(s)</span> best describes you?
      </Title>
      <CustomTooltip title="Your race relates to biological characteristics as well as sociopolitical aspects of identity, while ethnicity encompasses cultural factors like ancestry and traditions. Sometimes these overlap, contributing to your unique life experience."/>
    </div>
    <p>Knowing your background helps us connect you with mentors with similar life experience.</p>
    <Select
      mode="multiple"
      allowClear
      placeholder="Select"
      options={ethnicityOptions}
      onChange={value => updateFields({user_ethnicity: value})}
      style={{ width: '100%' }}
      value={user_ethnicity}
    />
    <div>
      <input type="checkbox"
        checked = {user_match_on_ethnicity}
        onChange={e => updateFields({user_match_on_ethnicity: e.target.checked})}
      />
      <p>I would prefer to find a mentor with a similar race or ethnic background as me.</p>
      </div>
    { user_ethnicity.length > 0 &&
      <div>
    <h3>What language(s) do you speak?</h3>
    <p>Please note that English is the default language for our site, but we encourage mentors to connect with mentees in other languages.</p>
    <Select
      mode="multiple"
      allowClear
      placeholder="Select"
      options={languageOptions}
      onChange={value => updateFields({user_language: value})}
      style={{ width: '100%' }}
      value={user_language}
    />
    </div>}
    </>
  )
}
