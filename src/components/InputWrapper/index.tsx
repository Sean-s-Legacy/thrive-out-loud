import React from "react";
import styles from "InputWrapper.module.css";

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
}) {
  const { Text } = Typography;
  const { TextArea } = Input;
  return (
    <div>
      <Text>{label}</Text>
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
        <TextArea
          autoSize
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
        />
      )}
    </div>
  );
}

export default InputWrapper;
