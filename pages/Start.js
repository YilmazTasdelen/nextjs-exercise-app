import React, { useState } from 'react';
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
} from 'antd';
import { Avatar, Card } from 'antd';
import {
  ArrowRightOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Image from 'next/image';

const { Meta } = Card;
const { TabPane } = Tabs;

const Start = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const [tabActive, setTabActive] = useState('disabled');
  const [dayCount, setDayCount] = useState(1);
  const [dayList, setDayList] = useState([]);

  const daysOnChange = async (value) => {
    // console.log('changed', value);
    console.log(value);
    await setDayCount(value);
    var days = [];
    for (var i = 0; i < value; i++) {
      days.push('DAY  ' + (i + 1));
    }
    await setDayList(days);
    console.log(dayList); // remember this is asyn function its callback
  };

  const data = [];
  const options = [
    {
      value: 'back',
    },
    {
      value: 'cardio',
    },
    {
      value: 'chest',
    },
    {
      value: 'lower arms',
    },
    {
      value: 'lower legs',
    },
    {
      value: 'neck',
    },
    {
      value: 'shoulders',
    },
    {
      value: 'upper arms',
    },
    {
      value: 'upper legs',
    },
    {
      value: 'waist',
    },
  ];
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;

    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    // console.log(closable);
    return (
      <Tag
        color={'#db4244'}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 7,
          width: 150,
          fontSize: 15,
          borderRadius: 9,
          textAlign: 'center',
        }}
      >
        {label}
      </Tag>
    );
  };
  return (
    <Row>
      <Col span={4}> </Col>
      <Col span={15}>
        <Row>
          <Col span={18}>
            <div
              style={{
                fontSize: 25,
                fontFamily: 'fantasy',
                textAlign: 'inherit',
                textShadow: '2px 2px #bfbfbfd9',
                paddingLeft: '30%',
              }}
            >
              1- Choose Goal
            </div>
          </Col>
          <Col span={4} style={{ float: 'right' }}>
            <Button
              type="link"
              danger
              style={{
                fontSize: 18,
                fontFamily: 'fantasy',
                textAlign: 'inherit',
                float: 'right',
              }}
            >
              Next
              <ArrowRightOutlined />
            </Button>
          </Col>
        </Row>
        <br />
        <Tabs tabPosition={tabPosition}>
          <TabPane tab="Chose Goal" key="1">
            <Card
              style={{
                width: '90%',

                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                backgroundColor: '#fffbfb',
              }}
            >
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      float: 'left',
                      fontSize: 42,
                      paddingTop: '5vh',
                      fontFamily: 'fantasy',
                      textAlign: 'center',
                      textShadow: '8px 8px #bfbfbfd9',
                    }}
                  >
                    Loose Weight
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ float: 'right', paddingRight: 20 }}>
                    <Image
                      src="/files/LooseWeigth.png"
                      alt="Picture of the author"
                      width={100}
                      height={140}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
            <br />
            {/* <Divider /> */}
            <Card
              style={{
                width: '90%',

                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                backgroundColor: '#fffbfb',
              }}
            >
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      float: 'left',
                      fontSize: 42,
                      paddingTop: '5vh',
                      fontFamily: 'fantasy',
                      textAlign: 'center',
                      textShadow: '8px 8px #bfbfbfd9',
                    }}
                  >
                    Gain Muscle
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ float: 'right', paddingRight: 20 }}>
                    <Image
                      src="/files/GainMuscle.png"
                      alt="Picture of the author"
                      width={100}
                      height={140}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
            {/* <Divider /> */}
            <br />
            <Card
              style={{
                width: '90%',

                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                backgroundColor: '#fffbfb',
              }}
            >
              <Row>
                <Col span={12}>
                  <div
                    style={{
                      float: 'left',
                      fontSize: 42,
                      paddingTop: '5vh',
                      fontFamily: 'fantasy',
                      textAlign: 'center',
                      textShadow: '8px 8px #bfbfbfd9',
                    }}
                  >
                    Get Shreded
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ float: 'right', paddingRight: 20 }}>
                    <Image
                      src="/files/GetShreded.png"
                      alt="Picture of the author"
                      width={100}
                      height={140}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </TabPane>
          <TabPane tab=" Spesify Days " tabActive key="2">
            <div style={{ fontFamily: 'fantasy' }}>
              Lets choose gym days for a week
            </div>
            <Divider />
            <InputNumber
              min={1}
              max={7}
              defaultValue={dayCount}
              onChange={daysOnChange}
            />
            &nbsp;&nbsp;&nbsp; day per week.
          </TabPane>
          <TabPane tab=" Spesify muscle groups" tabActive key="3">
            Spesify days with muscle group
            <br />
            {dayList.map((day) => (
              <Row key={day}>
                <Col span={24}>
                  <div
                    style={{
                      fontFamily: 'fantasy',
                      //   color: '#db4244',
                      textShadow: '2px 2px #e4b8b8',
                      padding: 5,
                      fontSize: 20,
                    }}
                  >
                    {day}
                  </div>
                  <Select
                    key={day}
                    mode="multiple"
                    showArrow
                    tagRender={tagRender}
                    defaultValue={['chest', 'back']}
                    style={{
                      width: '100%',
                    }}
                    options={options}
                  />
                </Col>
              </Row>
            ))}
            {dayList}
            <Row></Row>
          </TabPane>
          <TabPane tab="  Add Exercises" disabled key="4">
            Add Exercises
          </TabPane>
          <TabPane tab="  Fill gym days" disabled key="5">
            Fill all gym days
          </TabPane>
          <TabPane tab="  Save routine" disabled key="6">
            Save routine
          </TabPane>
          <TabPane tab="  İnsert body informtions" disabled key="7">
            İnsert body informtion
          </TabPane>
        </Tabs>
      </Col>
      <Col span={3}></Col>
    </Row>
  );
};

export default Start;
