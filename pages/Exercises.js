import { QuestionCircleOutlined, RollbackOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Input, Row, Select, Card, List } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Model, { IExerciseData, IMuscleStats } from 'react-body-highlighter';
import data from '../utils/data';
const { Option } = Select;
const { Meta } = Card;

const Exercises = () => {
  const [exercises, setexercises] = useState(data.exercises);
  const [filters, setFilters] = useState({
    target: 'pectoral',
    equipment: 'dumbbell',
    exerciseName: '',
  });

  const handleTargetChange = (value) => {
    setFilters({
      target: value,
      equipment: filters.equipment,
      exerciseName: filters.exerciseName,
    });
  };

  const handleNameChange = (e) => {
    setFilters({
      target: filters.target,
      equipment: filters.equipment,
      exerciseName: e.target.value,
    });
  };

  const handleEquipmentChange = (value) => {
    setFilters({
      target: filters.target,
      equipment: value,
      exerciseName: filters.exerciseName,
    });
  };

  useEffect(() => {
    setexercises(
      data.exercises.filter(
        (x) =>
          (!filters.target || x.target === filters.target) &&
          (!filters.equipment || x.equipment === filters.equipment) &&
          (!filters.exerciseName ||
            x.name.toLowerCase().includes(filters.exerciseName))
      )
    );
  }, [filters]);
  const [flip, setFlip] = useState('flip-card-inner');
  const myLoader = ({ src, width, quality }) => {
    return `http://d205bpvrqc9yn1.cloudfront.net/${src}`;
  };
  const modelFrontData = [
    { muscles: ['chest', 'triceps', 'front-deltoids', 'quadriceps', 'abs'] },
    { muscles: ['chest'] },
    { muscles: ['quadriceps'] },
    { muscles: ['front-deltoids'] },
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
  const modelBackData = [
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
    { muscles: ['calves'] },
    { muscles: ['gluteal'] },
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
    [modelFrontData]
  );
  return (
    <Row>
      <Col span={2}></Col>
      <Col span={4} style={{ backgroundColor: 'white', paddingRight: 25 }}>
        <div className="flip-card">
          <div
            style={{
              padding: 6,
              paddingTop: 12,
              fontFamily: 'Verdana',
              color: '#ab96b0',
              fontWeight: 'bold',
            }}
          >
            Click the muscle for exercises which targets it or use filters
          </div>
          <div className={flip}>
            <div className="flip-card-front">
              {' '}
              <Model
                data={modelFrontData}
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
                data={modelBackData}
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
            style={{ width: '100%', color: '#1890ff', fontFamily: 'Verdana' }}
            onClick={() => trunBodyImage()}
          >
            <RollbackOutlined

            //   style={{ marginLeft: '15%' }}
            />{' '}
            Turn The body
          </Button>
        </div>
      </Col>
      <Col span={16}>
        Target:
        <Select
          onChange={handleTargetChange}
          value={filters.target}
          style={{
            width: 120,
            margin: 10,
          }}
          allowClear
        >
          {data.targets.map((target) => (
            <Option value={target} key={target}>
              {target}
            </Option>
          ))}
        </Select>
        Equipment :
        <Select
          onChange={handleEquipmentChange}
          defaultValue="dumbbell"
          style={{
            width: 120,
            margin: 10,
          }}
          allowClear
        >
          {data.equipment.map((equipment) => (
            <Option value={equipment} key={equipment}>
              {equipment}
            </Option>
          ))}
        </Select>
        Name:
        <Input
          style={{ width: '20%', margin: 15 }}
          placeholder="Exercise name"
          onChange={handleNameChange}
        />
        {/* <Button
          type="dashed"
          shape="round"
          style={{ width: '100%', color: '#1890ff', fontFamily: 'Verdana' }}
          // onClick={() => handleAddExercises()}
        >
          Filter
        </Button> */}
        <Divider />
        <List
          grid={{
            gutter: 6,
            column: 6,
          }}
          dataSource={exercises}
          renderItem={(exercise) => (
            <List.Item>
              <QuestionCircleOutlined
                //  spin={true}
                //onClick={() => showModal(exercise.id)}
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  fontSize: 20,

                  right: '6px',
                  top: '3px',
                  // backgroundColor: 'rgb(53, 113, 224)',
                  backgroundColor: 'rgb(117 211 135)',
                  transform: 'scale(1)',
                  zIndex: 1,
                  borderRadius: '20px',
                  color: 'white',
                }}
              />
              <input
                type="checkbox"
                id={exercise.id}
                style={{ display: 'none' }}
                onChange={() => handleCheckBoxChange(exercise.id)}
              />

              <label htmlFor={exercise.id}>
                <Card
                  hoverable
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    verticalAlign: 'Fill',
                    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                    // minHeight: 320,
                  }}
                  cover={
                    <Image
                      //onClick={() => showModal(exercise.id)}
                      layout="responsive"
                      loader={myLoader}
                      src={`${exercise.id}.gif`}
                      alt="Picture of the author"
                      width={100}
                      height={100}
                      style={{ padding: 15, borderBottom: '1px solid #f0f0f0' }}
                    />
                  }
                >
                  {/* <Meta
                  title={exercise.target}
                  description={
                    <span
                      style={{ fontSize: 10, color: 'rgba(0, 0, 0, 0.45)' }}
                    >
                      {exercise.name}
                    </span>
                  }
                /> */}
                  <span style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.85)' }}>
                    {exercise.name}
                  </span>
                  <br />
                  <span style={{ fontSize: 10, color: 'rgba(0, 0, 0, 0.45)' }}>
                    <br />
                    target: {exercise.bodyPart}
                    equipment: {exercise.equipment}
                  </span>
                </Card>
              </label>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default Exercises;
