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
  Modal,
} from 'antd';
import { Avatar, Card } from 'antd';
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
import CustomDrawer from '../components/CustomDrawer';
import CustomModal from '../components/CustomModal';

const { Meta } = Card;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const Start = () => {
  const [activeKey, setActiveKey] = React.useState('1');
  const onKeyChange = (key) => {
    setActiveKey(key);
    console.log(key);
  };
  const [visible, setVisible] = useState(false);
  const [tabPosition, setTabPosition] = useState('left');
  const [tabActive, setTabActive] = useState('disabled');
  const [dayCount, setDayCount] = useState(1);
  const [dayList, setDayList] = useState(['DAY 1']);
  const [activeMuscle, setactiveMuscle] = useState('');
  const [muscleGroupByDay, setMuscleGroupByDay] = useState([
    {
      id: 1,
      muscleGroups: ['chest', 'back'],
    },
  ]);
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 0 : window.innerWidth
  );
  const [height, setHeight] = useState(
    typeof window === 'undefined' ? 0 : window.innerHeight
  );
  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  };
  const showDrawerWithMuscleParam = (muscle) => {
    setVisible(true);
    setactiveMuscle(muscle);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    console.log(width);
    if (width < 580) {
      setTabPosition('top');
    } else {
      setTabPosition('left');
    }
  }, [width]);

  const handleDynamicCreatedSelectChange = (val, iter) => {
    // todo check day count if day count change muscle groupbyday array should be updated. specially for deleting
    var muscleGroups = muscleGroupByDay.filter((day) => day.id != iter);
    muscleGroups.push({
      id: iter,
      muscleGroups: val,
    });
    if (dayCount < muscleGroups.length) {
      muscleGroups = muscleGroups.sort((a, b) => a.id - b.id); //sort by id
      muscleGroups = muscleGroups.slice(0, dayCount);
    }
    console.log(dayCount);
    console.log(muscleGroups.length);
    // console.log(muscleGroups);
    // }
    setMuscleGroupByDay(muscleGroups);
    console.log(muscleGroups);
  };

  const daysOnChange = async (value) => {
    await setDayCount(value);
    var days = [];
    for (var i = 0; i < value; i++) {
      days.push(i + 1);
    }
    await setDayList(days);
    // console.log(dayList); // remember this is asyn function its callback
  };

  const data = [];
  const options = [
    {
      value: 'abs',
    },
    {
      value: 'quads',
    },
    {
      value: 'lats',
    },
    {
      value: 'calves',
    },
    {
      value: 'pectorals',
    },
    {
      value: 'glutes',
    },
    {
      value: 'hamstrings',
    },
    {
      value: 'adductors',
    },
    {
      value: 'triceps',
    },
    {
      value: 'cardiovascular system',
    },
    {
      value: 'spine',
    },
    {
      value: 'upper back',
    },
    {
      value: 'biceps',
    },
    {
      value: 'delts',
    },
    {
      value: 'forearms',
    },
    {
      value: 'traps',
    },
    {
      value: 'serratus anterior',
    },
    {
      value: 'abductors',
    },
    {
      value: 'levator scapulae',
    },
  ];
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;

    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
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
  const myLoader = ({ src, width, quality }) => {
    return `http://d205bpvrqc9yn1.cloudfront.net/0003.gif`;
  };

  const showDrawer = (muscle) => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <Row>
      <CustomDrawer
        onClose={onClose}
        visible={visible}
        activeKey={activeKey}
        activeMuscle={activeMuscle}
      />
      <CustomModal
        modalVisible={modalVisible}
        setmodalVisible={setmodalVisible}
      />
      {/* <Button type="primary" onClick={() => setmodalVisible(true)}>
        Open Modal of 1000px width
      </Button> */}
      <Col
        xs={0}
        sm={0}
        md={0}
        lg={4}
        //span={4}
      >
        {' '}
      </Col>
      <Col xs={24} sm={24} md={24} lg={15}>
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
        <Tabs
          tabPosition={tabPosition}
          style={{ width: '100%', paddingLeft: 30 }}
        >
          <TabPane tab="Chose Goal" key="1">
            <Card
              style={{
                width: '100%',

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
                width: '100%',

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
                width: '100%',

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
                    defaultValue={['pectorals', 'triceps']}
                    style={{
                      width: '100%',
                    }}
                    options={options}
                    onChange={(value, options) =>
                      handleDynamicCreatedSelectChange(value, day)
                    }
                  />
                </Col>
              </Row>
            ))}
            {dayList}
            <Row></Row>
          </TabPane>
          {/* add exercise horizonal tabs end */}

          <TabPane tab="Add Exercises" key="4">
            Add Exercises
            <Tabs
              defaultActiveKey="1"
              activeKey={activeKey}
              onChange={onKeyChange}
            >
              {dayList.map((day) => (
                <TabPane
                  tab={
                    <span>
                      <StarOutlined />
                      {day}
                    </span>
                  }
                  key={day}
                >
                  <Row>
                    {muscleGroupByDay.filter((val) => val.id == day)[0] ? (
                      muscleGroupByDay
                        .filter((val) => val.id == day)[0]
                        .muscleGroups.map((muscle) => (
                          <Col span={12} key={muscle} style={{ padding: 5 }}>
                            <List
                              key={muscle}
                              split={false}
                              size="small"
                              header={
                                <>
                                  <div
                                    style={{
                                      fontSize: 15,
                                      fontFamily: 'fantasy',
                                      border: '0.01px solid #0000000f',
                                      //   textAlign: 'center',
                                      padding: 5,
                                    }}
                                  >
                                    {muscle}
                                    <div
                                      style={{
                                        float: 'right',
                                      }}
                                    >
                                      <Button
                                        key={muscle}
                                        size="small"
                                        shape="round"
                                        danger
                                        onClick={() =>
                                          showDrawerWithMuscleParam(muscle)
                                        }
                                      >
                                        {/* erything between the curly braces gets evaluated immediately. This causes the setOrderData_ function to be called in every render loop.
                                        By wrapping the function with an arrow function, the evaluated code will result in a function that can be called whenever the user clicks on the button. */}
                                        Add Exercise {muscle} -
                                      </Button>
                                    </div>
                                  </div>
                                </>
                              }
                              //   footer={<div>Footer</div>}
                              dataSource={
                                muscleGroupByDay.filter(
                                  (val) => val.id == day
                                )[0].muscleGroups
                              }
                              renderItem={(item) => (
                                <div className="horizonal-card-body">
                                  <Card hoverable style={{ margin: 5 }}>
                                    <Row>
                                      <Col span={6}>
                                        <Image
                                          loader={myLoader}
                                          src={`0003.gif`}
                                          alt="Picture of the author"
                                          width={80}
                                          height={80}
                                          style={{
                                            borderRight: '1px solid #f0f0f0',
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
                                          body weight
                                        </span>
                                        <br />
                                        <span
                                          style={{
                                            fontSize: 10,
                                            color: 'rgba(0, 0, 0, 0.45)',
                                          }}
                                        >
                                          arm slingers hanging bent knee legs
                                        </span>
                                      </Col>
                                    </Row>
                                  </Card>
                                </div>
                              )}
                            />
                          </Col>
                        ))
                    ) : (
                      <>empty</>
                    )}
                  </Row>
                </TabPane>
              ))}
            </Tabs>
          </TabPane>

          {/* add exercise horizonal tabs start */}
          <TabPane tab="  Fill gym days" tabActive key="5">
            Fill all gym days
          </TabPane>
          <TabPane tab="  Save routine" tabActive key="6">
            Save routine
          </TabPane>
          <TabPane tab="  İnsert body informtions" tabActive key="7">
            İnsert body informtion
          </TabPane>
        </Tabs>
      </Col>
      <Col
        xs={0}
        sm={0}
        md={0}
        lg={4}
        //span={3}
      ></Col>
    </Row>
  );
};

export default Start;
