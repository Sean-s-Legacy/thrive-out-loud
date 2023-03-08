import React, { useState } from "react";
import { Button, Modal, Typography, Input } from "antd";

function testing2(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { Title, Text } = Typography;

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
      <Input size="large" placeholder="large size" />
      <br />
      <br />
      <Input placeholder="default size" />
      <br />
      <br />
      <Input size="small" placeholder="small size" />

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        className="login"
        centered={true}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Title type={2}>My Title</Title>
        <Text>My text</Text>
        <Text>My text</Text>
        <Text>My text</Text>
      </Modal>
    </>
  );
}

export default testing2;
