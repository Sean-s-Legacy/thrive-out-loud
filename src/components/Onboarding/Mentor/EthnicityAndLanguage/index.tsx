import React from 'react'
import ETHNICITIES from '@/utils/Ethnicities'
import LANGUAGES from '@/utils/Languages'
import { Select } from 'antd'
import { SelectProps } from 'antd'
import Title from 'antd/lib/typography/Title'
import CustomTooltip from '@/components/Tooltip'
import OnboardingCheckbox from '../../OnboardingCheckbox'


type EthnicityAndLanguageData = {
  user_ethnicity: string[];
  user_language: string[];
}

type EthnicityAndLanguageProps = EthnicityAndLanguageData & {
  updateFields: (fields: Partial<EthnicityAndLanguageData>) => void;
  errorMessage: {};
}

const ethnicityOptions: SelectProps['options'] = ETHNICITIES.map(ethnicity => ({
  label: ethnicity,
  value: ethnicity.toLowerCase()
}))

const languageOptions: SelectProps['options'] = LANGUAGES.map(language => ({
  label: language,
  value: language.toLowerCase()
}))

export default function EthnicityAndLanguages({user_ethnicity, user_language, errorMessage, updateFields}: EthnicityAndLanguageProps){
  return (
    <>
    <div className='onboarding-title-container'>
      <Title level={3} className="semibold">
        Which <span style={{ color:"var(--primary7)" }}>race or ethnic background(s)</span> best describes you?
      </Title>
      <CustomTooltip title="Your race relates to biological characteristics as well as sociopolitical aspects of identity, while ethnicity encompasses cultural factors like ancestry and traditions. Sometimes these overlap, contributing to your unique life experience."/>
    </div>
    <p>Knowing your background helps us connect you with mentees with similar life experience.</p>
    <Select
      mode="multiple"
      allowClear
      placeholder="Select"
      options={ethnicityOptions}
      onChange={value => updateFields({user_ethnicity: value})}
      style={{ width: '100%' }}
      value={user_ethnicity}
    />
    {errorMessage && errorMessage['user_ethnicity'] && <p className="error-message"> <img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_ethnicity']}</p>}
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
    {user_ethnicity.length > 0 && errorMessage && errorMessage['user_language'] && <p className="error-message"> <img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_language']}</p>}
    </>
  )
}
