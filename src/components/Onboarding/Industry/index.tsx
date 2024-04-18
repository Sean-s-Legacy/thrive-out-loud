import { DiceFive } from 'phosphor-react'
import React from 'react'
import INDUSTRIES from '@/utils/Industries'
import Title from 'antd/lib/typography/Title'

type IndustryData = {
  user_industry: string[];
}
type IndustryProps = IndustryData &{
  updateFields: (fields: Partial<IndustryData>) => void;
  errorMessage: {};
}

export default function Industry({user_industry, updateFields, errorMessage}: IndustryProps){

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
      <Title level={3} className="semibold">
        Which <span style={{ color:"var(--primary7)" }}>industries</span> are you interested in?
      </Title>
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
        {errorMessage && errorMessage['user_industry'] && <p className="error-message">{errorMessage['user_industry']}</p>}
      </div>
    </>
  )
}
