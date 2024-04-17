import React from 'react';
import styles from './ProgressBarStep.module.css';

export default function ProgressBarStep({stepName, index, currentStepIndex}) {
  return(
    <div key={index} className={styles.stepContainer} >
            <div className={`${styles.stepNumber} ${index === currentStepIndex ? styles.currentStepNumber : ''}`}>{index+1}</div>
            <div className={`${styles.stepTitle} ${index === currentStepIndex ? styles.currentStepTitle : ''}`}>{stepName.key}</div>
          </div>
  )
}
