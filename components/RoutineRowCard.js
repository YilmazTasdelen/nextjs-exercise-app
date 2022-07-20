import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Col, InputNumber, Row } from 'antd';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { Store } from '../utils/Store';

const RoutineRowCard = (props) => {
  const { state, dispatch } = useContext(Store);
  const { muscleGroupByDayState, dayCount, dayList } = state;
  const [rep, setRep] = useState(0);
  const [set, setSet] = useState(0);

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

  const setOnChange = (value) => {
    setSet(value);
    dispatch({
      type: 'ADD_REPS_AND_SET_DATA_FOR_EXERCISE',
      payload: {
        exerId: props.exercise.id,
        set: value,
        rep: rep,
        wday: props.day,
      },
    });
  };

  const repOnChange = (value) => {
    setRep(value);
    console.log('deleted item: ', props.exercise.id);
    dispatch({
      type: 'ADD_REPS_AND_SET_DATA_FOR_EXERCISE',
      payload: {
        exerId: props.exercise.id,
        set: set,
        rep: value,
        wday: props.day,
      },
    });
  };

  return (
    <Card hoverable style={{ margin: 5 }}>
      <Row>
        <Col span={6}>
          <Image
            loader={imageLoader}
            src={`${props.exercise.id}.gif`}
            alt=""
            width={80}
            height={80}
          />
        </Col>
        <Col span={12} style={{ padding: 12 }}>
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
              fontSize: 13,
              color: 'rgba(0, 0, 0, 0.45)',
            }}
          >
            {props.exercise.name}
          </span>
        </Col>
        <Col
          span={6}
          style={{
            //padding: 24,
            fontWeight: 450,
            fontFamily: 'Verdana',
            color: 'rgba(0, 0, 0, 0.45)',
            fontSize: 12,
            // fontVariant: 'tabular-nums',
            // fontFeatureSettings: 'tnum',
            // lineHeight: '1.5715',
            float: 'right',
          }}
        >
          <div
            style={{
              float: 'right',
              top: '30%',
              right: '20%',
              position: 'absolute',
              fontWeight: 450,
            }}
          >
            set: {props.set}
            <br />
            rep:{props.rep}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default RoutineRowCard;
