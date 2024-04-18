import React from 'react';
import { Checkbox, Typography } from 'antd';
import FOCUS_AREAS from '@/utils/FocusAreas';

const { Title, Paragraph } = Typography;

type FocusAreaData = {
  user_focus_area: string[];
};

type FocusAreaProps = FocusAreaData & {
  updateFields: (fields: Partial<FocusAreaData>) => void;
  errorMessage: {};
};

const FocusArea: React.FC<FocusAreaProps> = ({ user_focus_area, updateFields, errorMessage }) => {
  const handleCheckboxChange = (focusAreaName: string) => {
    if (user_focus_area.includes(focusAreaName)) {
      updateFields({ user_focus_area: user_focus_area.filter((focusArea) => focusArea !== focusAreaName) });
    } else {
      updateFields({ user_focus_area: [...user_focus_area, focusAreaName] });
    }
  };

  return (
    <>
      <Title level={3} className="semibold">
        Are you looking for support in a specific <span style={{ color: 'var(--primary7)' }}>area of focus</span>?
      </Title>
      <Paragraph>Knowing this will allow us to match you with mentees looking to grow those specific skills.</Paragraph>
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
          <p className="error-message">{errorMessage['user_focus_area']}</p>
        )}
      </div>
    </>
  );
};

export default FocusArea;
