import React, { useState, useEffect } from 'react';
import { Checkbox, Typography } from 'antd';
import INDUSTRIES from '@/utils/Industries';
import InputWrapper from '@/components/InputWrapper';
import styles from "./Industry.module.css"
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
  const [customData, setCustomData] = useState<string[]>([]);

  const removeCustomEntry = (e, entry: string) => {
    e.preventDefault();
    const index = user_industry.indexOf(entry);
    if (index > -1) {
      const updatedUserIndustry = [...user_industry];
      updatedUserIndustry.splice(index, 1);
      updateFields({ user_industry: updatedUserIndustry });
    }
    const updatedCustomData = customData.filter(item => item !== entry);
    setCustomData(updatedCustomData);
  };

  useEffect(() => {
    console.log(user_industry);
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
      if (customIndustry && !user_industry.includes(customIndustry) && user_industry.length < 3) {
        updateFields({ user_industry: [...user_industry, customIndustry] });
        setCustomData([...customData, customIndustry]);
      }
      setCustomIndustry('');
    }
  };

  const handleBlur = () => {
    console.log(user_industry.length > 3)
    if (customIndustry && !user_industry.includes(customIndustry) && user_industry.length < 3) {
      updateFields({ user_industry: [...user_industry, customIndustry] });
      setCustomData([...customData, customIndustry]);
    }
    setCustomIndustry('');
  };

  const CustomList = () => (
    <div className={styles.customValuesWrapper}>
      {customData.map((entry, index) => (
        <div onClick={(event) => removeCustomEntry(event, entry)} key={index} className={styles.customValueWrapper}>
          <button >x</button>
          <p>{entry}</p>
        </div>
      ))}
    </div>
  );

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
        <CustomList />
        {errorMessage && errorMessage['user_industry'] && <p className="error-message"><img src="/images/Warning.svg" alt="Warning" /> {errorMessage['user_industry']}</p>}
      </div>        
      {notListedInput && (
        <div style={{ margin: '15px 0px' }}>
          <InputWrapper
            label
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
