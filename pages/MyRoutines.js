import { Col, Row } from 'antd';
import React from 'react';

const MyRoutines = () => {
  return (
    <Row>
      <Col span={2}></Col>
      <Col
        span={4}
        style={{ backgroundColor: 'white', paddingRight: 25 }}
      ></Col>
      <Col span={16}></Col>
    </Row>
  );
};

export default MyRoutines;
