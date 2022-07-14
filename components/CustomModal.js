import { Modal } from 'antd';
import React from 'react';

const CustomModal = (props) => {
  return (
    <Modal
      title="Modal 1000px width"
      centered
      visible={props.modalVisible}
      onOk={() => props.setmodalVisible(false)}
      onCancel={() => props.setmodalVisible(false)}
      width={'90%'}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default CustomModal;
