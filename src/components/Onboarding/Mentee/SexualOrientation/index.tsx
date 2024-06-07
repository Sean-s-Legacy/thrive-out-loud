import React, { useEffect, useState } from 'react';
import SEXUAL_ORIENTATIONS from '@/utils/SexualOrientations';
import { Select } from 'antd';
import { SelectProps } from 'antd';
import Title from 'antd/lib/typography/Title';
import CustomTooltip from '@/components/Tooltip';
import OnboardingCheckbox from '../../OnboardingCheckbox';
import InputWrapper from '@/components/InputWrapper';

const options: SelectProps['options'] = SEXUAL_ORIENTATIONS.map(orientation => ({
  label: orientation,
  value: orientation.toLowerCase()
}));

type SexualOrientationData = {
  user_sexual_orientation: string[];
}

type SexualOrientationProps = SexualOrientationData & {
  updateFields: (fields: Partial<SexualOrientationData>) => void;
  errorMessage: {};
}

export default function SexualOrientation({ user_sexual_orientation, errorMessage, updateFields }: SexualOrientationProps) {
  const [notListedInput, setNotListedInput] = useState(false);
  const [customText, setCustomText] = useState('');

  useEffect(() => {
    setNotListedInput(user_sexual_orientation.includes('my orientation is not listed'));
  }, [user_sexual_orientation]);

  const handleSelectChange = (value: string[]) => {
    if (!value.includes('my orientation is not listed')) {
      setCustomText('');
    }
    updateFields({ user_sexual_orientation: value });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (customText && !user_sexual_orientation.includes(customText)) {
        updateFields({ user_sexual_orientation: [...user_sexual_orientation, customText] });
      }
      setCustomText('');
    }
  };

  const handleBlur = () => {
    if (customText && !user_sexual_orientation.includes(customText)) {
      updateFields({ user_sexual_orientation: [...user_sexual_orientation, customText] });
    }

    setCustomText('');
  };

  return (
    <>
      <div className='onboarding-title-container'>
        <Title level={3} className="semibold">
          What is your <span style={{ color: "var(--primary7)" }}>sexual orientation</span>?
        </Title>
        <CustomTooltip
          title="Sexual orientation refers to who you’re attracted to romantically, sexually, or emotionally. It can be fluid, meaning you may have multiple or changing orientations over time."
        />
      </div>
      <p className='subtitle-regular'>Knowing your orientation helps us connect you with mentors with similar life experience. We won’t share your personal information with anyone else.</p>
      <p>Select all that apply</p>
      <Select
        mode="multiple"
        allowClear
        placeholder="Select"
        options={options}
        onChange={handleSelectChange}
        style={{ width: '100%' }}
        value={user_sexual_orientation}
      />
      {errorMessage && errorMessage['user_sexual_orientation'] && (
        <p className="error-message">
          <img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_sexual_orientation']}
        </p>
      )}
      {notListedInput && (
        <div style={{ margin: '15px 0px'}}>
          <InputWrapper
            style={{ margin: '15px 0px'}}
            label="My orientation is not listed"
            placeholder="Enter your orientation"
            value={customText}
            optional
            size
            onChange={e => setCustomText(e.target.value)}
            className=""
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
          />
        </div>
      )}
    </>
  );
}
