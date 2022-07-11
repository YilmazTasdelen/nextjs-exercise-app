import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'antd/dist/antd.css';
import Model, { IExerciseData, IMuscleStats } from 'react-body-highlighter';

import { Steps, Col, Row } from 'antd';
const { Step } = Steps;

export default function Home() {
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

  // ('adductor');
  // ('hamstring');
  // ('quadriceps');
  // ('abductors');
  // ('calves');
  // ('gluteal');

  const handleClick = React.useCallback(
    ({ muscle, data }) => {
      const { exercises, frequency } = data;

      // alert(
      //   `You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(
      //     exercises
      //   )}`
      // );
    },
    [data]
  );
  return (
    <Row>
      <Col span={6} style={{ backgroundColor: 'white' }}>
        <Steps
          style={{ paddingTop: 50 }}
          direction="vertical"
          size="small"
          current={6}
          className="ant-steps-custom"
        >
          <Step title="1" description="Chose Days per week" />
          <Step title="2" description="Spesify days with muscle group" />
          <Step title="3" description="Add Exercises" />
          <Step title="4" description="Fill all gym days" />
          <Step title="5" description="Save routine" />
        </Steps>
      </Col>
      <Col span={12}>
        <Row>
          <Col span={12}>
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
          <Col span={12}>
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
      </Col>

      <Col span={6}></Col>
    </Row>
  );
}
