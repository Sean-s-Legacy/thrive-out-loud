import React, { useState, useEffect } from 'react';
import { Checkbox, Typography } from 'antd';
import FOCUS_AREAS from '@/utils/FocusAreas';
import InputWrapper from '@/components/InputWrapper';

const { Title, Paragraph } = Typography;

type FocusAreaData = {
  user_focus_area: string[];
};

type FocusAreaProps = FocusAreaData & {
  updateFields: (fields: Partial<FocusAreaData>) => void;
  errorMessage: {};
};

const FocusArea: React.FC<FocusAreaProps> = ({ user_focus_area, updateFields, errorMessage }) => {
  const [notListedInput, setNotListedInput] = useState(false);
  const [customFocusArea, setCustomFocusArea] = useState('');

  useEffect(() => {
    setNotListedInput(user_focus_area.includes('Not listed'));
        console.log(user_focus_area, notListedInput)
  }, [user_focus_area]);

  const handleCheckboxChange = (focusAreaName: string) => {
    if (user_focus_area.includes(focusAreaName)) {
      updateFields({ user_focus_area: user_focus_area.filter((focusArea) => focusArea !== focusAreaName) });
    } else {
      updateFields({ user_focus_area: [...user_focus_area, focusAreaName] });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (customFocusArea && !user_focus_area.includes(customFocusArea)) {
        updateFields({ user_focus_area: [...user_focus_area, customFocusArea] });
      }
      if(customFocusArea === ''){
        updateFields({ user_focus_area: ['Not listed'] })
      }
    }
  };

  const handleBlur = () => {
    if (customFocusArea && !user_focus_area.includes(customFocusArea)) {
      updateFields({ user_focus_area: [...user_focus_area, customFocusArea] });
    }
    if(customFocusArea === ''){
      updateFields({ user_focus_area: ['Not listed'] })
    }
  };

  return (
    <>
      <Title level={3} className="semibold">
        Are you looking for support in a specific <span style={{ color: 'var(--primary7)' }}>area of focus</span>?
      </Title>
      <Paragraph>We’ll match you with a mentor who can support you with this.</Paragraph>
      <Paragraph>Select all that apply</Paragraph>
      <div className='checkbox-container-vertical'>
        {FOCUS_AREAS.map((focusArea) => (
          <Checkbox
            key={focusArea}
            onChange={() => handleCheckboxChange(focusArea)}
            checked={user_focus_area.includes(focusArea)}
          >
            {focusArea}
          </Checkbox>
        ))}
        {errorMessage && errorMessage['user_focus_area'] && (
          <p className="error-message"><img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_focus_area']}</p>
        )}
      </div>
      {notListedInput && (
        <div style={{ margin: '15px 0px'}}>
        <InputWrapper
          label="Not listed"
          placeholder="Enter your focus area"
          value={customFocusArea}
          style={{ margin: '15px 0px' }}
          size="large"
          onChange={e => setCustomFocusArea(e.target.value)}
          className=""
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
        />
        </div>
      )}
    </>
  );
};

export default FocusArea;
