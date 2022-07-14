import React, { useEffect, useState } from 'react';
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
} from 'antd';
import {
  AndroidOutlined,
  AppleOutlined,
  ArrowRightOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  StarOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import data from '../utils/data';
const { Option } = Select;

const CustomDrawer = (props) => {
  const myLoader = ({ src, width, quality }) => {
    return `http://d205bpvrqc9yn1.cloudfront.net/${src}`;
  };

  const [activeMuscle, setactiveMuscle] = useState(props.activeMuscle);
  const [equipment, setequipment] = useState('dumbbell');
  const [exerciseName, setexerciseName] = useState(undefined);
  const [filters, setFilters] = useState({
    target: props.activeMuscle,
    equipment: 'dumbbell',
    exerciseName: undefined,
  });

  const [exercises, setexercises] = useState(
    data.exercises.filter(
      (x) => x.bodyPart === props.activeMuscle
      // &&
      // (!equipment || x.equipment === equipment) &&
      // (!activeMuscle || x.target === activeMuscle)
    )
  );
  // useEffect(() => {

  // }, []);

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

  return (
    <Drawer
      style={{ fontFamily: 'monospace' }}
      title="Select at least one exercise"
      placement="right"
      onClose={props.onClose}
      visible={props.visible}
      size={'large'}
    >
      Target:
      <Select
        onChange={handleTargetChange}
        defaultValue={activeMuscle}
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
      {/* <Button type="ghost" danger shape="round" style={{ width: '100%' }}>
        Filter
      </Button> */}
      <Divider />
      {/* {props.activeMuscle}
      {props.activeKey} */}
      <List
        grid={{
          gutter: 16,
          column: 2,
        }}
        dataSource={exercises}
        renderItem={(exercise) => (
          <List.Item>
            <Row
              key={exercise.id}
              style={{
                width: '100%',
                backgroundColor: '#edededa1',
                marginBottom: 15,
              }}
            >
              {/* //sm md lg xl xxl */}
              <Col xs={24} sm={24} md={24} lg={7}>
                <Image
                  layout="responsive"
                  loader={myLoader}
                  src={`${exercise.id}.gif`}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  style={{ padding: 5 }}
                />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={16}
                style={{
                  textAlign: 'left',
                  paddingLeft: 10,
                  fontFamily: 'monospace',
                }}
              >
                {/* {item}  */}
                name:{exercise.name},
                <br />
                equipment: {exercise.equipment}
                <br />
                target: {exercise.target}
              </Col>
              <Col xs={24} sm={24} md={24} lg={1}>
                <Checkbox
                  style={{
                    float: 'right',
                    paddingTop: 14,
                    paddingRight: 15,
                    fontSize: 15,
                  }}
                />
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default CustomDrawer;
