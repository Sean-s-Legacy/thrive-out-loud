import React from 'react';
import { Checkbox, Typography } from 'antd';
import INDUSTRIES from '@/utils/Industries';

const { Title, Paragraph } = Typography;

type IndustryData = {
  user_industry: string[];
};

type IndustryProps = IndustryData & {
  updateFields: (fields: Partial<IndustryData>) => void;
  errorMessage: {};
};

const Industry: React.FC<IndustryProps> = ({ user_industry, updateFields, errorMessage }) => {
  const handleCheckboxChange = (industryName: string) => {
    if (user_industry.includes(industryName)) {
      updateFields({ user_industry: user_industry.filter((industry) => industry !== industryName) });
    } else if (user_industry.length < 3) {
      updateFields({ user_industry: [...user_industry, industryName] });
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
        {errorMessage && errorMessage['user_industry'] && <p className="error-message"> <img src="/images/Warning.svg"/> {errorMessage['user_industry']}</p>}
      </div>
    </>
  );
};

export default Industry;
