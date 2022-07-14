import React, { useEffect } from 'react';
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

  useEffect(() => {
    var t = [];
    data.exercises.map((e) => {
      if (!t.includes(e.target)) {
        t.push(e.target);
      }
    });
    console.log(t);
  }, []);

  return (
    <Drawer
      title="Select at least one exercise"
      placement="right"
      onClose={props.onClose}
      visible={props.visible}
      size={'large'}
    >
      <Select
        defaultValue={props.activeMuscle}
        style={{
          width: 120,
        }}
        allowClear
      >
        {data.targets.map((target) => (
          <Option value={target} key={target}>
            {target}
          </Option>
        ))}
      </Select>
      <Select
        defaultValue="dumbbell"
        style={{
          width: 120,
        }}
        allowClear
      >
        {data.equipment.map((equipment) => (
          <Option value={equipment} key={equipment}>
            {equipment}
          </Option>
        ))}
      </Select>
      <Input style={{ width: '20%' }} placeholder="Exercise name" />

      {props.activeMuscle}
      {props.activeKey}
      <List
        grid={{
          gutter: 16,
          column: 2,
        }}
        dataSource={data.exercises.filter(
          (x) => x.bodyPart === props.activeMuscle
        )}
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
