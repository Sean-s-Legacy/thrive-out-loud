import React from 'react'
import FOCUS_AREAS from '@/utils/FocusAreas'
import Title from 'antd/lib/typography/Title'

type FocusAreaData = {
  user_focus_area: string[];
}
type FocusAreaProps = FocusAreaData &{
  updateFields: (fields: Partial<FocusAreaData>) => void;
  checkboxError: string;
}

export default function FocusArea({user_focus_area, updateFields, checkboxError}: FocusAreaProps){
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const focus_areaName = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      updateFields({user_focus_area: [...user_focus_area, focus_areaName] });
    } else {
      updateFields({user_focus_area: user_focus_area.filter((focus_area) => focus_area !== focus_areaName) });
    }
  };

  return(
    <>
      <Title level={3} className="semibold">
        Are you loooking for support in a specific <span style={{ color:"var(--primary7)" }}>area of focus</span>?
      </Title>
      <p>We’ll match you with a mentor who can support you with this.</p>
      <label>Select all that apply</label>
      <div>
        {FOCUS_AREAS.map((focus_area) => (
          <div key={focus_area}>
            <input
              type="checkbox"
              id={focus_area}
              name={focus_area}
              checked={user_focus_area.includes(focus_area)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={focus_area}>{focus_area}</label>
        </div>
        ))}
        {checkboxError && <div style={{ color: 'red' }}>{checkboxError}</div>}
      </div>
    </>
  )
}
