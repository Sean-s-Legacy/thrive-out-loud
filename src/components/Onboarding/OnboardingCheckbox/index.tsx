import React from "react";
import Checkbox from 'antd/lib/checkbox/Checkbox'
import styles from './OnboardingCheckbox.module.css'

export default function OnboardingCheckbox({checked, onChange, content}: {checked: boolean, onChange: (e: any) => void, content: string}) {
  return(
    <div className={styles.matchOnCheckbox}>
      <Checkbox
        checked={checked}
        onChange={onChange}
      >
      {content}
      </Checkbox>
    </div>
  )
}
