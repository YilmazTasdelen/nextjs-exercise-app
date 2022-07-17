import { DingtalkOutlined, DownloadOutlined } from '@ant-design/icons';
import { Col, Row, Button, Divider } from 'antd';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

function Header() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  return (
    <div className="header">
      <Row
        style={{
          textAlign: 'center',
          paddingTop: 2,
          fontSize: 15,
          fontFamily: 'fantasy',
          fontWeight: 'lighter',
        }}
      >
        <Col span={14} style={{ float: 'left' }}>
          <DingtalkOutlined
            style={{
              float: 'left',
              fontSize: 34,
              paddingLeft: 20,
              color: '#db4244',
              textShadow: '2px 2px #ff4d4f !important',
            }} //#ff4d4f
          />
        </Col>
        <Col span={6}>
          <Row>
            <Col
              span={5}
              style={{
                float: 'right',
                textShadow: '2px 2px #bfbfbfd9',
                color: 'black',
              }}
            >
              <Link href="/Exercises">Exercises</Link>
            </Col>
            <Col
              span={9}
              style={{ float: 'right', textShadow: '2px 2px #bfbfbfd9' }}
            >
              Muscle Groups
            </Col>
            <Col
              span={5}
              style={{ float: 'right', textShadow: '2px 2px #bfbfbfd9' }}
            >
              Examples{' '}
            </Col>
            <Col
              span={5}
              style={{ float: 'right', textShadow: '2px 2px #bfbfbfd9' }}
            >
              Custom{' '}
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          {userInfo ? (
            userInfo.name
          ) : (
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
          )}
        </Col>
      </Row>
      <Divider style={{ marginTop: 12 }} />
    </div>
  );
}

export default Header;
