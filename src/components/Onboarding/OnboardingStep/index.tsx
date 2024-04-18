import CustomTooltip from "@/components/Tooltip";
import Title from "antd/lib/typography/Title";
import InputWrapper from "@/components/InputWrapper";

import {Select} from "antd"

type OnboardingStepData = {
  title: string;
  description: string;
  inputs: InputData[];
  tooltip?: string;
  subQuestion?: any
}

type InputData = {
  inputLabel?: string;
  tooltip?: string;
  instructions?: string;
  type: string;
  options?: string[];
  value: string;
  explainer?: string;
  errorMessage?: string;
}

type OnboardingStepProps = OnboardingStepData & {
  data: any;
  updateFields: (fields: any) => void;
}

type InputProps = InputData & {
  data: any;
  updateFields: (fields: any) => void;
}

export default function OnboardingStep({title, description, inputs, tooltip, subQuestion, data, updateFields}:OnboardingStepProps){
  return (
    // RENDER PARENT QUESTION AND ITS INPUTS, THEN RENDER SUBQUESTION IF IT EXISTS AND USER HAS ANSWERED PARENT QUESTION

    <div>
      <Title level={3} className="semibold">
        {title}
      </Title>
      {tooltip &&
        <CustomTooltip title={tooltip} />
      }
      <p>{description}</p>
      {inputs.map((input, index) => {
        return <Input key={index} {...input} data={data} updateFields={updateFields} />
      })}

      {subQuestion && data[inputs[0].value].length > 0 &&
      (
        <div>
          <h2>{subQuestion.title}</h2>
          <p>{subQuestion.description}</p>
          {subQuestion.inputs.map((input, index) => {
            return <Input key={index} {...input} data={data} updateFields={updateFields} />
          })}

        </div>
      )
    }
    </div>
  )
}



function Input({inputLabel, instructions, type, options, value, explainer, errorMessage, data, updateFields}: InputProps){

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionName = event.target.name;
    const isChecked = event.target.checked;
    const optionValue = event.target.value;
    if (isChecked) {
      updateFields({[value]: [...data[value], optionName] });
    } else {
      updateFields({[value]: data[value].filter((item) => item !== optionName) });
    }
  };

  return (
    // RENDER INPUT BASED ON TYPE - TEXT, SELECT, CHECKBOX, MATCH PREFERENCE, DATE
    // SHOW ERROR MESSAGE IF INPUT IS REQUIRED AND NOT FILLED OUT

    <div>
      {type === "text" && (
        <InputWrapper
          label={inputLabel? inputLabel : ""}
          placeholder={inputLabel? inputLabel : ""}
          value={data[value]}
          onChange={e => updateFields({[value]: e.target.value})}
          required
          className={""}
          size = "large"
        />
        )}

      {type === "select" && (
        <>
          {instructions && <label>{instructions}</label>}
          <Select
            mode="multiple"
            allowClear
            placeholder="Select"
            style={{ width: '100%' }}
            value={data[value]}
            options={options?.map(option => ({label: option, value: option}))}
            onChange={selectedValues => {updateFields({[value]: selectedValues})}}
          />
        </>
      )}

      {type === "checkbox" && (
        options?.map((option) => (
          <div key={option}>
            <input
              type="checkbox"
              id={option}
              name={option}
              onChange={handleCheckboxChange}
              checked={data[value].includes(option)}
            />
            <label htmlFor={option}>{option}</label>
        </div>
        ))
      )}

      {type === "match preference" && (
        <label>
          <input type="checkbox"
          checked={data[value]}
          onChange={e => updateFields({[value]: e.target.checked})} />
          {explainer}
        </label>
      )}

      {type === "date" && (
        <input type="date"
        required value={data[value] ? data[value] : ''}
        onChange={e => updateFields({[value]: e.target.value})}/>
        )}

      {errorMessage && (
        <p style={{color: "red"}}>{errorMessage}</p>
      )}
    </div>
  )
}
