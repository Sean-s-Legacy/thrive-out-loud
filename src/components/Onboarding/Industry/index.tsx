import { DiceFive } from 'phosphor-react'
import React from 'react'
import INDUSTRIES from '@/utils/Industries'

type IndustryData = {
  user_industry: string[];
}
type IndustryProps = IndustryData &{
  updateFields: (fields: Partial<IndustryData>) => void;
  checkboxError: string;
}

export default function Industry({user_industry, updateFields, checkboxError}: IndustryProps){

const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const industryName = event.target.name;
  const isChecked = event.target.checked;

  if (isChecked && user_industry.length < 3) {
    updateFields({user_industry: [...user_industry, industryName] });
  } else {
    updateFields({user_industry: user_industry.filter((industry) => industry !== industryName) });
  }
};

  return(
    <>
      <h3>Which <span>industries</span> are you interested in?</h3>
      <p>We’ll match you with mentors who are experts the industry and eager to support your professional development.</p>
      <label>Select all that apply (3 max)</label>
      <div>
        {INDUSTRIES.map((industry) => (
          <div key={industry}>
            <input
              type="checkbox"
              id={industry}
              name={industry}
              checked={user_industry.includes(industry)}
              onChange={handleCheckboxChange}
              disabled={user_industry.includes(industry) && user_industry.length === 3 && !user_industry.includes(industry)}
            />
            <label htmlFor={industry}>{industry}</label>
        </div>
        ))}
        {checkboxError && <div style={{ color: 'red' }}>{checkboxError}</div>}
      </div>
    </>
  )
}
