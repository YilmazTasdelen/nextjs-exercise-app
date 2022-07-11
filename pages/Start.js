import React from 'react';
import { Col, Row, Divider, Button } from 'antd';
import { Avatar, Card } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
const { Meta } = Card;

const Start = () => {
  return (
    <Row>
      <Col span={6}></Col>
      <Col span={12}>
        <div
          style={{
            fontSize: 25,
            fontFamily: 'fantasy',
            textAlign: 'inherit',
            textShadow: '2px 2px #bfbfbfd9',
          }}
        >
          1- Choose Goal
        </div>
        <br />
        <Card
          style={{
            width: '90%',
            height: '24vh',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            backgroundColor: '#fffbfb',
          }}
        >
          <Row>
            <Col span={12}>
              <div
                style={{
                  float: 'left',
                  fontSize: 42,
                  paddingTop: '5vh',
                  fontFamily: 'fantasy',
                  textAlign: 'center',
                  textShadow: '8px 8px #bfbfbfd9',
                }}
              >
                Loose Weight
              </div>
            </Col>
            <Col span={12}>
              <div style={{ float: 'right', paddingRight: 20 }}>
                <Image
                  src="/files/LooseWeigth.png"
                  alt="Picture of the author"
                  width={100}
                  height={140}
                />
              </div>
            </Col>
          </Row>
        </Card>
        <br />
        {/* <Divider /> */}
        <Card
          style={{
            width: '90%',
            height: '24vh',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            backgroundColor: '#fffbfb',
          }}
        >
          <Row>
            <Col span={12}>
              <div
                style={{
                  float: 'left',
                  fontSize: 42,
                  paddingTop: '5vh',
                  fontFamily: 'fantasy',
                  textAlign: 'center',
                  textShadow: '8px 8px #bfbfbfd9',
                }}
              >
                Gain Muscle
              </div>
            </Col>
            <Col span={12}>
              <div style={{ float: 'right', paddingRight: 20 }}>
                <Image
                  src="/files/GainMuscle.png"
                  alt="Picture of the author"
                  width={100}
                  height={140}
                />
              </div>
            </Col>
          </Row>
        </Card>
        {/* <Divider /> */}
        <br />
        <Card
          style={{
            width: '90%',
            height: '24vh',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            backgroundColor: '#fffbfb',
          }}
        >
          <Row>
            <Col span={12}>
              <div
                style={{
                  float: 'left',
                  fontSize: 42,
                  paddingTop: '5vh',
                  fontFamily: 'fantasy',
                  textAlign: 'center',
                  textShadow: '8px 8px #bfbfbfd9',
                }}
              >
                Get Shreded
              </div>
            </Col>
            <Col span={12}>
              <div style={{ float: 'right', paddingRight: 20 }}>
                <Image
                  src="/files/GetShreded.png"
                  alt="Picture of the author"
                  width={100}
                  height={140}
                />
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={3}></Col>
    </Row>
  );
};

export default Start;
