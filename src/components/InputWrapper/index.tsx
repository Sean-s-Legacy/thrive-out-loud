import React from "react";
import styles from "InputWrapper.module.css";

import { EyeSlash, Eye } from "phosphor-react";

import { Input, Typography } from "antd";
function InputWrapper({
  label,
  onChange,
  password = false,
  placeholder,
  size,
  value,
}) {
  const { Text } = Typography;
  return (
    <div>
      <Text>{label}</Text>
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
