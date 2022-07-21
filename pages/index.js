import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'antd/dist/antd.css';
import Model, { IExerciseData, IMuscleStats } from 'react-body-highlighter';

import { Steps, Col, Row, Divider, Button } from 'antd';
import Link from 'next/link';
const { Step } = Steps;

export default function Home() {
  const handleRouteStart = () => {};

  const data = [
    { muscles: ['chest', 'triceps', 'front-deltoids', 'quadriceps'] },
    { muscles: ['chest'] },
  ];

  const data2 = [
    {
      name: 'test',
      muscles: [
        'trapezius',
        'upper-back',
        // 'lower-back',
        'calves',
        // 'adductor',
        'hamstring',
        'gluteal',
      ],
    },
    { name: 'test', muscles: ['trapezius'] },
  ];

  const data3 = [
    { name: 'test', muscles: ['trapezius', 'upper-back', 'lower-back'] },
    { name: 'test', muscles: ['trapezius'] },
  ];

  const handleClick = React.useCallback(
    ({ muscle, data }) => {
      const { exercises, frequency } = data;
    },
    [data]
  );

  return (
    <Row style={{ padding: 24, width: '100%' }}>
      <Col xs={0} sm={0} md={0} lg={5} xl={5} xxl={5}></Col>
      <Col
        xs={0}
        sm={0}
        md={0}
        lg={4}
        xl={4}
        xxl={4}
        style={{ backgroundColor: 'white' }}
      >
        <Steps
          style={{ paddingTop: 60 }}
          direction="vertical"
          size="small"
          current={6}
          className="ant-steps-custom"
        >
          <Step
            title="1"
            description={
              <div style={{ fontSize: 15, fontFamily: 'fantasy' }}>
                Spesify Goal
              </div>
            }
          />
          <Step
            title="2"
            description={
              <div style={{ fontSize: 15, fontFamily: 'fantasy' }}>
                Chose Days per week
              </div>
            }
          />
          <Step
            title="3"
            description={
              <div style={{ fontSize: 15, fontFamily: 'fantasy' }}>
                Spesify days with muscle group
              </div>
            }
          />
          <Step
            title="4"
            description={
              <div style={{ fontSize: 15, fontFamily: 'fantasy' }}>
                Add Exercises
              </div>
            }
          />
          <Step
            title="5"
            description={
              <div style={{ fontSize: 15, fontFamily: 'fantasy' }}>
                Fill all gym days
              </div>
            }
          />
          <Step
            title="6"
            description={
              <div style={{ fontSize: 15, fontFamily: 'fantasy' }}>
                Save routine
              </div>
            }
          />
        </Steps>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
        <div
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'fantasy',
            // color: '#94989c',
          }}
        >
          BUILD YOUR PERFECT BODY
        </div>
        <div
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'lighter',
            fontFamily: 'fantasy',
            color: '#94989c',
          }}
        >
          Get a personalized workout program and track your pocess...
        </div>

        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Model
              data={data}
              highlightedColors={[
                '#ccbf93',
                '#ab96b0',
                '#e65a5a',
                '#db2f2f',
                '#95cc93',
              ]}
              style={{ width: '20rem', padding: '5rem' }}
              onClick={handleClick}
            />
          </Col>
          <Col xs={0} sm={0} md={0} lg={12} xl={12} xxl={12}>
            <Model
              type="posterior"
              data={data2}
              highlightedColors={[
                '#ccbf93',
                '#ab96b0',
                '#e65a5a',
                '#db2f2f',
                '#95cc93',
              ]}
              style={{ width: '20rem', padding: '5rem' }}
              // onClick={handleClick}
            />
          </Col>
        </Row>
        {/* <Divider /> */}
        <Link href="/Start">
          <Button
            style={{
              float: 'right',
              width: '100%',
              fontSize: 15,
              fontFamily: 'fantasy',
            }}
            shape="round"
            type="primary"
            onClick={() => handleRouteStart()}
            ghost
          >
            Start Explore
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
