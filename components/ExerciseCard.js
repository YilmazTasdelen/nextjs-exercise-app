import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Col, InputNumber, Row } from 'antd';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

const ExerciseCard = (props) => {
  const { state, dispatch } = useContext(Store);
  const { muscleGroupByDayState, dayCount, dayList } = state;

  const imageLoader = ({ src, width, quality }) => {
    return `http://d205bpvrqc9yn1.cloudfront.net/${src}`;
  };
  const handleDeleteClick = () => {
    console.log('deleted item: ', props.exercise.id);
    dispatch({
      type: 'DELETE_EXERCISE_FROM_DAY',
      payload: { exericseId: props.exercise.id, workoutDay: props.day },
    });
  };

  const setOnChange = () => {
    console.log('deleted item: ', props.exercise.id);
    // dispatch({
    //   type: 'DELETE_EXERCISE_FROM_DAY',
    //   payload: { exericseId: props.exercise.id, workoutDay: props.day },
    // });
  };

  const repOnChange = () => {
    console.log('deleted item: ', props.exercise.id);
    // dispatch({
    //   type: 'DELETE_EXERCISE_FROM_DAY',
    //   payload: { exericseId: props.exercise.id, workoutDay: props.day },
    // });
  };

  return (
    <Card hoverable style={{ margin: 5, minHeight: 120 }}>
      {/* {props.muscle} - {props.day} */}
      {/* <CloseCircleOutlined /> */}
      <DeleteOutlined
        onClick={() => handleDeleteClick()}
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          fontWeight: 'bolder',
          top: 8,
          right: 8,
          fontSize: 15,
          padding: 3,
          color: '#dd3c3e',
          borderRadius: '20px',
          borderStyle: 'solid',
          borderColor: '#dd3c3e',
          borderWidth: 1,
          zIndex: 25,
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
            // style={{
            //   borderRight: '1px solid #f0f0f0',
            // }}
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
        <span style={{ marginLeft: '30%' }}>set:</span>
        <InputNumber
          size="small"
          min={1}
          max={100000}
          defaultValue={3}
          onChange={setOnChange}
          style={{ width: 60, marginLeft: '3%', marginBottom: 12 }}
        />
        <span style={{ marginLeft: '3%' }}>rep:</span>
        <InputNumber
          size="small"
          min={1}
          max={100000}
          defaultValue={3}
          onChange={repOnChange}
          style={{ width: 60, marginLeft: '3%', marginBottom: 12 }}
        />
      </Row>
    </Card>
  );
};

export default ExerciseCard;
