import { RollbackOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import Model, { IExerciseData, IMuscleStats } from 'react-body-highlighter';

const Exercises = () => {
  const handleRouteStart = () => {};
  const [flip, setFlip] = useState('flip-card-inner');

  const data = [
    { muscles: ['chest', 'triceps', 'front-deltoids', 'quadriceps'] },
    { muscles: ['chest'] },
  ];
  /**
 * /* Back 
trapezius
upper-back
lower-back

/* Chest 
chest

/* Arms 
biceps
triceps
forearm
back-deltoids
front-deltoids

/* Abs 
abs
obliques

/* Legs 
adductor
hamstring
quadriceps
abductors
calves
gluteal

/* Head 
head
neck
 * 
 * 
 */
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

  const trunBodyImage = () => {
    console.log('rotated');
    if (flip === 'flip-card-inner') {
      setFlip('flip-card-inner-rotated');
    } else {
      setFlip('flip-card-inner');
    }
  };
  const handleClick = React.useCallback(
    ({ muscle, data }) => {
      const { exercises, frequency } = data;

      alert(
        `You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(
          exercises
        )}`
      );
    },
    [data]
  );
  return (
    <Row>
      <Col span={3}></Col>
      <Col span={4} style={{ backgroundColor: 'white' }}>
        <div className="flip-card">
          <div style={{ padding: 6 }}>
            {' '}
            click the muscle for see exercises for it or use filter
          </div>
          <div className={flip}>
            <div className="flip-card-front">
              {' '}
              <Model
                data={data}
                highlightedColors={[
                  '#ccbf93',
                  '#ab96b0',
                  '#e65a5a',
                  '#db2f2f',
                  '#95cc93',
                ]}
                style={{ padding: 15 }}
                onClick={handleClick}
              />
            </div>
            <div className="flip-card-back">
              {' '}
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
                style={{ padding: 15 }}
                // onClick={handleClick}
              />
            </div>
          </div>
          <Button
            type="dashed"
            shape="round"
            style={{ width: '100%' }}
            onClick={() => trunBodyImage()}
          >
            <RollbackOutlined

            //   style={{ marginLeft: '15%' }}
            />{' '}
            Turn The body
          </Button>
        </div>
      </Col>
      <Col span={8}>
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

        {/* <Row>
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
        </Row> */}
        {/* <Divider /> */}
      </Col>
    </Row>
  );
};

export default Exercises;
