import React from 'react';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Divider, Cascader, Input, Form } from 'antd';
import styles from './profileForm.module.css'

export default function ProfileFormSection() {
    const { TextArea } = Input;

    const options = [
        {
            value: 'they',
            label: 'They'
        },
        {
            value: 'them',
            label: 'Them'
        },
        {
            value: 'theirs',
            label: 'Theirs'
        }
             
    ]

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e);
      };
      

  return (
    <Form.Item>
    <div>
      <section>
        <div>
        <h3 className={styles.aboutyou}>About you</h3>
         <Checkbox  className={styles.checkbox} value=''>Show Name on Profile</Checkbox>
         </div>

         <Divider/>

          <div className={styles.lastname}>
          <h4>First Name</h4>
         <Input 
            placeholder='Enter name' 
            type='text' 
            onChange={onChange} 
            className={styles.nameinput}/>
            </div>
         <div>

         <h4>Last Name</h4>
         <Input 
            placeholder='Enter name' 
            type='text' 
            onChange={onChange} 
            className={styles.nameinput}/>
          </div>

        
         <h4>Pronouns</h4>
         <div className={styles.cascader}>
           <Cascader options={options} placeholder="They/them/theirs" className={styles.cascader}/>
        </div>

         <h4>Tell us a liitle about yourself and what you’d like to learn from mentorship.</h4>

         <TextArea 
         
            showCount
            maxLength={500}
            style={{ resize: 'none', width: '1142px', height: '178px',}}
            className={styles.textarea}
            onChange={onChange}
          />
        
      </section>
    </div>
    </Form.Item>
  )
}
