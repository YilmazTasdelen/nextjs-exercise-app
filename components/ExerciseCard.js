import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

const ExerciseCard = (props) => {
  const { state, dispatch } = useContext(Store);
  const { muscleGroupByDayState, dayCount, dayList } = state;

  const imageLoader = ({ src, width, quality }) => {
    return `http://d205bpvrqc9yn1.cloudfront.net/${src}`;
  };
  return (
    <Card hoverable style={{ margin: 5 }}>
      {/* {props.muscle} - {props.day} */}
      {/* <CloseCircleOutlined /> */}
      <DeleteOutlined
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          fontSize: 15,
          color: 'red',
        }}
      />
      <Row>
        <Col span={6}>
          <Image
            loader={imageLoader}
            src={`${props.exercise.id}.gif`}
            alt="Picture of the author"
            width={80}
            height={80}
            style={{
              borderRight: '2px solid #f0f0f0',
            }}
          />
        </Col>
        <Col span={18} style={{ padding: 24 }}>
          <span
            style={{
              fontSize: 15,
              color: 'rgba(0, 0, 0, 0.85)',
            }}
          >
            {props.exercise.target} - {props.exercise.equipment}
          </span>
          <br />
          <span
            style={{
              fontSize: 10,
              color: 'rgba(0, 0, 0, 0.45)',
            }}
          >
            {props.exercise.name}
          </span>
        </Col>
      </Row>
    </Card>
  );
};

export default ExerciseCard;
