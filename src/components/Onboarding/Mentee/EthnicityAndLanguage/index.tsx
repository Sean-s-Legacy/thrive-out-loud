import React, { useEffect, useState } from 'react';
import ETHNICITIES from '@/utils/Ethnicities';
import LANGUAGES from '@/utils/Languages';
import { Select } from 'antd';
import { SelectProps } from 'antd';
import Title from 'antd/lib/typography/Title';
import CustomTooltip from '@/components/Tooltip';
import OnboardingCheckbox from '../../OnboardingCheckbox';
import InputWrapper from '@/components/InputWrapper';

type EthnicityAndLanguageData = {
  user_ethnicity: string[];
  user_language: string[];
  user_match_on_ethnicity: boolean;
}

type EthnicityAndLanguageProps = EthnicityAndLanguageData & {
  updateFields: (fields: Partial<EthnicityAndLanguageData>) => void;
  errorMessage: {};
}

const ethnicityOptions: SelectProps['options'] = ETHNICITIES.map(ethnicity => ({
  label: ethnicity,
  value: ethnicity.toLowerCase()
}));

const languageOptions: SelectProps['options'] = LANGUAGES.map(language => ({
  label: language,
  value: language.toLowerCase()
}));

export default function EthnicityAndLanguages({ user_ethnicity, user_language, user_match_on_ethnicity, errorMessage, updateFields }: EthnicityAndLanguageProps) {
  const [notListedEthnicityInput, setNotListedEthnicityInput] = useState(false);
  const [customEthnicity, setCustomEthnicity] = useState('');
  const [notListedLanguageInput, setNotListedLanguageInput] = useState(false);
  const [customLanguage, setCustomLanguage] = useState('');

  useEffect(() => {
    setNotListedEthnicityInput(user_ethnicity.includes('not listed'));
    setNotListedLanguageInput(user_language.includes('not listed'));
  }, [user_ethnicity, user_language]);

  const handleEthnicityChange = (value: string[]) => {
    if (!value.includes('not listed')) {
      setCustomEthnicity('');
    }
    console.log(user_ethnicity)
    updateFields({ user_ethnicity: value });
  };

  const handleLanguageChange = (value: string[]) => {
    if (!value.includes('not listed')) {
      setCustomLanguage('');
    }
    updateFields({ user_language: value });
  };

  const handleEthnicityKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (customEthnicity && !user_ethnicity.includes(customEthnicity)) {
        updateFields({ user_ethnicity: [...user_ethnicity, customEthnicity] });
      }
      setCustomEthnicity('');
    }
  };

  const handleLanguageKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (customLanguage && !user_language.includes(customLanguage)) {
        updateFields({ user_language: [...user_language, customLanguage] });
      }
      setCustomLanguage('');
    }
  };

  const handleEthnicityBlur = () => {
    if (customEthnicity && !user_ethnicity.includes(customEthnicity)) {
      updateFields({ user_ethnicity: [...user_ethnicity, customEthnicity] });
    }
    setCustomEthnicity('');
  };

  const handleLanguageBlur = () => {
    if (customLanguage && !user_language.includes(customLanguage)) {
      updateFields({ user_language: [...user_language, customLanguage] });
    }
    setCustomLanguage('');
  };

  return (
    <>
      <div className='onboarding-title-container' >
        <Title level={3} className="semibold">
          Which <span style={{ color: "var(--primary7)" }}>race or ethnic background(s)</span> best describes you?
        </Title>
        <CustomTooltip title="Your race relates to biological characteristics as well as sociopolitical aspects of identity, while ethnicity encompasses cultural factors like ancestry and traditions. Sometimes these overlap, contributing to your unique life experience." />
      </div>
      <p>Knowing your background helps us connect you with mentors with similar life experience.</p>
      <Select
        mode="multiple"
        allowClear
        placeholder="Select"
        options={ethnicityOptions}
        onChange={handleEthnicityChange}
        style={{ width: '100%' }}
        value={user_ethnicity}
      />
      {errorMessage && errorMessage['user_ethnicity'] && (
        <p className="error-message">
          <img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_ethnicity']}
        </p>
      )}
      {notListedEthnicityInput && (
        <div style={{ margin: '15px 0px'}}>
        <InputWrapper
          label="My ethnicity is not listed"
          placeholder="Enter your ethnicity"
          value={customEthnicity}
          style={{ margin: '15px 0px' }}
          size="large"
          onChange={e => setCustomEthnicity(e.target.value)}
          className=""
          onBlur={handleEthnicityBlur}
          onKeyPress={handleEthnicityKeyPress}
        />
        </div>
      )}
      <OnboardingCheckbox
        checked={user_match_on_ethnicity}
        onChange={e => updateFields({ user_match_on_ethnicity: e.target.checked })}
        content="I would prefer to find a mentor with a similar race or ethnic background as me."
      />
      {user_ethnicity.length > 0 && (
        <div>
          <h3>What language(s) do you speak?</h3>
          <p>Please note that English is the default language for our site, but we encourage mentors to connect with mentees in other languages.</p>
          <Select
            mode="multiple"
            allowClear
            placeholder="Select"
            options={languageOptions}
            onChange={handleLanguageChange}
            style={{ width: '100%' }}
            value={user_language}
          />
          {notListedLanguageInput && (
           <div style={{ margin: '15px 0px'}}>
            <InputWrapper
              label="My language is not listed"
              placeholder="Enter your language"
              value={customLanguage}
              style={{ margin: '15px 0px' }}
              size="large"
              onChange={e => setCustomLanguage(e.target.value)}
              className=""
              onBlur={handleLanguageBlur}
              onKeyPress={handleLanguageKeyPress}
            />
          </div>
          )}
        </div>
      )}
      {user_ethnicity.length > 0 && errorMessage && errorMessage['user_language'] && (
        <p className="error-message">
          <img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_language']}
        </p>
      )}
    </>
  );
}
