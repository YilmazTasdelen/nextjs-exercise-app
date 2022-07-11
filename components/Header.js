import { DownloadOutlined } from '@ant-design/icons';
import { Col, Row, Button, Divider } from 'antd';
import React from 'react';

function Header() {
  return (
    <div className="header">
      <Row
        style={{
          textAlign: 'center',
          paddingTop: 10,
          fontSize: 15,
          fontFamily: 'fantasy',
          fontWeight: 'lighter',
        }}
      >
        <Col span={14}></Col>
        <Col span={6}>
          <Row>
            <Col span={5} style={{ float: 'right' }}>
              Exercises
            </Col>
            <Col span={9} style={{ float: 'right' }}>
              Muscle Groups
            </Col>
            <Col span={5} style={{ float: 'right' }}>
              Examples{' '}
            </Col>
            <Col span={5} style={{ float: 'right' }}>
              Custom{' '}
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Button
            style={{
              marginTop: -5,
              fontSize: 15,
              fontFamily: 'fantasy',
              fontWeight: 'lighter',
            }}
            shape="round"
            danger
          >
            Sign up/Login
          </Button>
        </Col>
      </Row>
      <Divider style={{ marginTop: 12 }} />
    </div>
  );
}

export default Header;
