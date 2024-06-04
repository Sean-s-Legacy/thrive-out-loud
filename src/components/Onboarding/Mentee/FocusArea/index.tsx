import React, { useState, useEffect } from 'react';
import { Checkbox, Typography } from 'antd';
import FOCUS_AREAS from '@/utils/FocusAreas';
import InputWrapper from '@/components/InputWrapper';
import styles from "./FocusArea.module.css"; // Assuming you have a CSS module for FocusArea

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
  const [customData, setCustomData] = useState<string[]>([]);

  const removeCustomEntry = (e, entry: string) => {
    e.preventDefault();
    const index = user_focus_area.indexOf(entry);
    if (index > -1) {
      const updatedUserFocusArea = [...user_focus_area];
      updatedUserFocusArea.splice(index, 1);
      updateFields({ user_focus_area: updatedUserFocusArea });
    }
    const updatedCustomData = customData.filter(item => item !== entry);
    setCustomData(updatedCustomData);
  };

  useEffect(() => {
    setNotListedInput(user_focus_area.includes('Not listed'));
  }, [user_focus_area]);

  const handleCheckboxChange = (focusAreaName: string) => {
    if (user_focus_area.includes(focusAreaName)) {
      updateFields({ user_focus_area: user_focus_area.filter((focusArea) => focusArea !== focusAreaName) });
    } else if (user_focus_area.length < 3) { // Adjust the condition if needed
      updateFields({ user_focus_area: [...user_focus_area, focusAreaName] });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (customFocusArea && !user_focus_area.includes(customFocusArea) && user_focus_area.length < 3) {
        updateFields({ user_focus_area: [...user_focus_area, customFocusArea] });
        setCustomData([...customData, customFocusArea]);
      }
      setCustomFocusArea('');
    }
  };

  const handleBlur = () => {
    if (customFocusArea && !user_focus_area.includes(customFocusArea) && user_focus_area.length < 3) {
      updateFields({ user_focus_area: [...user_focus_area, customFocusArea] });
      setCustomData([...customData, customFocusArea]);
    }
    setCustomFocusArea('');
  };

  const CustomList = () => (
    <div className={styles.customValuesWrapper}>
      {customData.map((entry, index) => (
        <div onClick={(event) => removeCustomEntry(event, entry)} key={index} className={styles.customValueWrapper}>
          <button>x</button>
          <p>{entry}</p>
        </div>
      ))}
    </div>
  );

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
            disabled={user_focus_area.includes(focusArea) && user_focus_area.length === 3 && !user_focus_area.includes(focusArea)}
          >
            {focusArea}
          </Checkbox>
        ))}
        <CustomList />
        {errorMessage && errorMessage['user_focus_area'] && (
          <p className="error-message"><img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_focus_area']}</p>
        )}
      </div>
      {notListedInput && (
        <div style={{ margin: '15px 0px' }}>
          <InputWrapper
            label
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
