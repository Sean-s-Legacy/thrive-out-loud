import React, { useState} from 'react';
import Image from 'next/image';
import { Button, Modal, Form, Input } from 'antd';
import styles from './signup.module.css';

export default function SignUpModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
   <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>

      <Modal width={1000} title="Welcome" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles.container1}>
        <div>
        <Form className={styles.form}>
         <Form.Item >
            <h4>Email</h4>
            <Input
            placeholder='Enter Email'
            />
         </Form.Item>
         <Form.Item >
            <h4>Password</h4>
            <Input
            placeholder='Enter password'
            />
         </Form.Item>
         <Button>Sign up</Button>
        <h4>or</h4>
        <Button>Continue with Google</Button>
        <h4>Already have an account? Log in</h4>
        </Form>
        </div>
        <div>
        <Image alt="modal" width={572} height={743.63} src="/images/module.png"/>
       </div>
        </div>
      </Modal>
   
    </>

  )
}
