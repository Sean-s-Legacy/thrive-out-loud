import React, { useState, useEffect } from 'react';
import { Checkbox, Typography } from 'antd';
import INDUSTRIES from '@/utils/Industries';
import InputWrapper from '@/components/InputWrapper';

const { Title, Paragraph } = Typography;

type IndustryData = {
  user_industry: string[];
};

type IndustryProps = IndustryData & {
  updateFields: (fields: Partial<IndustryData>) => void;
  errorMessage: {};
};

const Industry: React.FC<IndustryProps> = ({ user_industry, updateFields, errorMessage }) => {
  const [notListedInput, setNotListedInput] = useState(false);
  const [customIndustry, setCustomIndustry] = useState('');

  useEffect(() => {
    console.log(user_industry)
    setNotListedInput(user_industry.includes('My industry is not listed'));
  }, [user_industry]);

  const handleCheckboxChange = (industryName: string) => {
    if (user_industry.includes(industryName)) {
      updateFields({ user_industry: user_industry.filter((industry) => industry !== industryName) });
    } else if (user_industry.length < 3) {
      updateFields({ user_industry: [...user_industry, industryName] });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (customIndustry && !user_industry.includes(customIndustry)) {
        updateFields({ user_industry: [...user_industry, customIndustry] });
      }
      if(customIndustry === ''){
        updateFields({ user_industry: ['My industry is not listed'] })
      }
    }
  };

  const handleBlur = () => {
    if (customIndustry && !user_industry.includes(customIndustry)) {
      updateFields({ user_industry: [...user_industry, customIndustry] });
    }
    if(customIndustry === ''){
      updateFields({ user_industry: ['My industry is not listed'] })
    }
  };

  return (
    <>
      <Title level={3} className="semibold">
        Which <span style={{ color: 'var(--primary7)' }}>industries</span> are you interested in?
      </Title>
      <Paragraph>We’ll match you with mentors who are experts in the industry and eager to support your professional development.</Paragraph>
      <Paragraph>Select all that apply (3 max)</Paragraph>
      <div className='checkbox-container-vertical'>
        {INDUSTRIES.map((industry) => (
          <Checkbox
            key={industry}
            onChange={() => handleCheckboxChange(industry)}
            checked={user_industry.includes(industry)}
            disabled={user_industry.includes(industry) && user_industry.length === 3 && !user_industry.includes(industry)}
          >
            {industry}
          </Checkbox>
        ))}
        {errorMessage && errorMessage['user_industry'] && <p className="error-message"><img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_industry']}</p>}
      </div>
      {notListedInput && (
        <div style={{ margin: '15px 0px'}}>
        <InputWrapper
          label="My industry is not listed"
          placeholder="Enter your industry"
          value={customIndustry}
          style={{ margin: '15px 0px' }}
          size="large"
          onChange={e => setCustomIndustry(e.target.value)}
          className=""
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
        />
        </div>
      )}
    </>
  );
};

export default Industry;
