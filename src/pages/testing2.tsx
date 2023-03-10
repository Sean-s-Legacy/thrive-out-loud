import React, { useState } from "react";
import {
  Button,
  Modal,
  Typography,
  Input,
  InputNumber,
  TimePicker,
} from "antd";
import { Clock } from "phosphor-react";

function Testing2(props) {
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
      <Input size="large" placeholder="First Name" />
      <Input size="large" placeholder="Pronouns" />
      <Input size="large" placeholder="Timezone" />
      <TimePicker.RangePicker />
      <InputNumber size="small" controls={false} placeholder="Input Number" />
      <Input
        size="small"
        placeholder="Input"
        addonBefore={<Clock size={20} weight="light" />}
        addonAfter={<Clock size={20} weight="light" />}
      />

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
        <Title level={2}>My Title</Title>
        <Text>My text</Text>
        <Text>My text</Text>
        <Text>My text</Text>
      </Modal>
    </>
  );
}

export default Testing2;
