import { DownloadOutlined } from '@ant-design/icons';
import { Col, Row, Button } from 'antd';
import React from 'react';

function Header() {
  return (
    <div className="header">
      <Row>
        <Col span={6}></Col>
        <Col span={8}>
          <Row>
            <Col span={6}>Exercises</Col>
            <Col span={6}>Body parts</Col>
            <Col span={6}>Examples </Col>
            <Col span={6}>Custom routine</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Button style={{ float: 'right' }} shape="round" danger>
            Sign up/Login
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
