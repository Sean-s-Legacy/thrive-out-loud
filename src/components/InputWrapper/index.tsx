import React from "react";
import styles from "./InputWrapper.module.css";
import { EyeSlash, Eye } from "phosphor-react";

import { Input, Typography } from "antd";
function InputWrapper({
  label,
  onChange,
  optional = false,
  password = false,
  placeholder,
  rows = null,
  size,
  textarea = false,
  value,
  required = false,
  style = undefined,
  className = undefined,
  onBlur = undefined, 
  onKeyPress = undefined 
}) {
  const { Text } = Typography;
  //   const { TextArea } = Input;
  return (
    <div>
      <div className={required ? styles.required : ""}>
        <label>
          <Text className={className}>{label}</Text>
        </label>
      </div>
      {optional ? <Text> (optional)</Text> : null}
      {password ? (
        <Input.Password
          iconRender={(visible) =>
            visible ? <Eye size={24} /> : <EyeSlash size={24} />
          }
          onChange={onChange}
          placeholder={placeholder}
          size={size}
          value={value}
        />
      ) : textarea ? (
        <Input.TextArea
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          size={size}
          value={value}
        />
      ) : (
        <Input
          onChange={onChange}
          placeholder={placeholder}
          size={size}
          value={value}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          style={style}
        />
      )}
    </div>
  );
}

export default InputWrapper;
