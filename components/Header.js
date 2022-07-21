import { DingtalkOutlined, DownloadOutlined } from '@ant-design/icons';
import { Col, Row, Button, Divider } from 'antd';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';

function Header() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const [userName, setUserName] = useState();

  useEffect(() => {
    userInfo ? setUserName(userInfo.name) : setUserName(undefined);
  }, []);

  const userButtonHandler = () => {
    return userName ? (
      <div>{userName}</div>
    ) : (
      <Button
        style={{
          marginTop: -5,
          fontSize: 15,
          fontFamily: 'fantasy',
          fontWeight: 'lighter',
          float: 'left',
        }}
        shape="round"
        danger
      >
        Sign up/Login
      </Button>
    );
  };

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
        <Col
          xs={0}
          sm={0}
          md={0}
          lg={14}
          xl={14}
          xxl={14}
          style={{ float: 'left' }}
        >
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
        <Col xs={16} sm={18} md={18} lg={6} xl={6} xxl={6}>
          <Row>
            <Col
              xs={0}
              sm={0}
              md={0}
              lg={5}
              xl={5}
              xxl={5}
              style={{ float: 'right', textShadow: '2px 2px #bfbfbfd9' }}
            ></Col>
            <Col
              span={5}
              style={{ float: 'right', textShadow: '2px 2px #bfbfbfd9' }}
            >
              <Link href="/"> Home</Link>
            </Col>
            <Col
              span={5}
              style={{
                float: 'right',
                textShadow: '2px 2px #bfbfbfd9',
                color: 'black !important',
              }}
            >
              <Link href="/Exercises">Exercises</Link>
            </Col>
            <Col
              span={9}
              style={{ float: 'right', textShadow: '2px 2px #bfbfbfd9' }}
            >
              <Link href="/MyRoutines"> My Routines</Link>
            </Col>

            {/* <Col
              span={5}
              style={{ float: 'right', textShadow: '2px 2px #bfbfbfd9' }}
            >
              Custom{' '}
            </Col> */}
          </Row>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
          {userButtonHandler()}
        </Col>
      </Row>
      <Divider style={{ marginTop: 12 }} />
    </div>
  );
}

export default Header;
