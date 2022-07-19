import React, { useContext, useEffect, useState } from 'react';
import {
  Col,
  Row,
  Divider,
  Button,
  Space,
  Tabs,
  InputNumber,
  List,
  Typography,
  Select,
  Tag,
  Collapse,
  Drawer,
  Checkbox,
  Input,
  Modal,
  Card,
} from 'antd';
import {
  AndroidOutlined,
  AppleOutlined,
  ArrowRightOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  EditOutlined,
  EllipsisOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  StarOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import data from '../utils/data';
import { Store } from '../utils/Store';
const { Option } = Select;
const { Meta } = Card;

const CustomDrawer = (props) => {
  const { state, dispatch } = useContext(Store);
  const { muscleGroupByDayState, dayCount, dayList } = state;
  const myLoader = ({ src, width, quality }) => {
    return `http://d205bpvrqc9yn1.cloudfront.net/${src}`;
  };

  const [checkBoxList, setcheckBoxList] = useState([]);
  const [activeMuscle, setactiveMuscle] = useState(props.activeMuscle);
  const [equipment, setequipment] = useState('dumbbell');
  const [exerciseName, setexerciseName] = useState(undefined);
  const [filters, setFilters] = useState({
    target: props.activeMuscle,
    equipment: 'dumbbell',
    exerciseName: undefined,
  });

  useEffect(() => {
    setactiveMuscle(props.activeMuscle);
    setFilters({
      target: props.activeMuscle,
      equipment: filters.equipment,
      exerciseName: filters.exerciseName,
    });
  }, [props.activeMuscle]);

  const [exercises, setexercises] = useState(
    data.exercises.filter(
      (x) => x.bodyPart === props.activeMuscle
      // &&
      // (!equipment || x.equipment === equipment) &&
      // (!activeMuscle || x.target === activeMuscle)
    )
  );

  const handleAddExercises = () => {
    {
      /* {props.activeMuscle}
      {props.activeKey} */
      //day
    }

    dispatch({
      type: 'ADD_EXERCISE_BY_DAY_AND_MUSCLE_GROUP',
      payload: {
        activeMuscle: props.activeMuscle,
        exerciseDay: props.activeKey,
        exerciseList: checkBoxList,
      },
    });
    props.onClose();
  };

  const handleCheckBoxChange = (exerciseId) => {
    if (checkBoxList.length > 0) {
      var item = checkBoxList.find((row) => row === exerciseId);
      if (item) {
        var t = checkBoxList.filter((row) => row != exerciseId);
        setcheckBoxList(t);
      } else {
        var tempList = checkBoxList;
        tempList.push(exerciseId);
        setcheckBoxList(tempList);
      }
    } else {
      var tempList = [];
      tempList.push(exerciseId);
      setcheckBoxList(tempList);
    }

    console.log(checkBoxList);
  };

  const filterExercises = () => {};

  const handleTargetChange = (value) => {
    console.log(value);
    setFilters({
      target: value,
      equipment: filters.equipment,
      exerciseName: filters.exerciseName,
    });
    console.log(filters);
  };

  const handleEquipmentChange = (value) => {
    setFilters({
      target: filters.target,
      equipment: value,
      exerciseName: filters.exerciseName,
    });
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setFilters({
      target: filters.target,
      equipment: filters.equipment,
      exerciseName: e.target.value,
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalExercise, setmodalExercise] = useState(0);

  const showModal = (val) => {
    setmodalExercise(val);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setcheckBoxList([]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setcheckBoxList([]);
    setIsModalVisible(false);
  };

  const handleDrawerOnClose = () => {
    setcheckBoxList([]);
    props.onClose();
  };

  return (
    <Drawer
      destroyOnClose={true}
      style={{}}
      title="Click exercise for adding"
      placement="right"
      onClose={handleDrawerOnClose}
      visible={props.visible}
      size={'large'}
    >
      {/* {props.activeMuscle} */}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalExercise}
      </Modal>
      Target:
      <Select
        onChange={handleTargetChange}
        value={filters.target}
        //defaultValue={filters.target}
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
      <Button
        type="ghost"
        danger
        shape="round"
        style={{ width: '100%' }}
        onClick={() => handleAddExercises()}
      >
        Add
      </Button>
      <Divider />
      {/* {props.activeMuscle}
      {props.activeKey} */}
      <List
        grid={{
          gutter: 6,
          column: 5,
        }}
        dataSource={exercises}
        renderItem={(exercise) => (
          <List.Item>
            <QuestionCircleOutlined
              //  spin={true}
              onClick={() => showModal(exercise.id)}
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
                  {exercise.target}
                </span>
                <br />
                <span style={{ fontSize: 10, color: 'rgba(0, 0, 0, 0.45)' }}>
                  {exercise.name}
                </span>
              </Card>
            </label>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default CustomDrawer;
