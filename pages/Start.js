import React, { useEffect, useState, useContext } from 'react';
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
  Input,
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
import ExerciseCard from '../components/ExerciseCard';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import data from '../utils/data';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import Router from 'next/router';

const { Meta } = Card;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const Start = () => {
  const { exercises } = data;

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
  const { state, dispatch } = useContext(Store);
  const { muscleGroupByDayState, dayCount, dayList, notes, userInfo } = state;

  const [modalVisible, setmodalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tabPosition, setTabPosition] = useState('left');
  const [activeMuscle, setactiveMuscle] = useState('');
  const [activeKey, setActiveKey] = React.useState('1');
  const [goal, setGoal] = useState('');
  const [name, setName] = useState('');
  const [activeBaseKey, setActiveBaseKey] = useState('1');
  const titles = [
    '',
    'Choose Goal',
    'Spesify Days',
    'Spesify Muscle Groups',
    'Add Exercises',
    'Set Notes',
    'Save',
  ];
  const [activeTitle, setactiveTitle] = useState(titles[0]);

  // activeKey = { activeKey };
  // activeBaseKey;
  const baseStepsTabChange = (key) => {
    setactiveTitle(titles[key]);
    setActiveBaseKey(key);
  };

  useEffect(() => {
    setActiveBaseKey('2');

    dispatch({
      type: 'SET_GOAL',
      payload: { goal: goal },
    });
  }, [goal]);

  const handleRoutineNameChange = (e) => {
    setName(e.target.value);
    dispatch({
      type: 'SET_NAME',
      payload: { name: e.target.value },
    });
  };

  const saveRoutine = async () => {
    // todo check if its login then redirect to login or save if already login
    console.log(userInfo.token);
    if (!userInfo.token) {
      //error here user info emty when there was a user info
      Router.push('/Start');
    } else {
      //save then clear store
      const { data } = await axios.post('/api/routine', {
        muscleGroupByDayState: muscleGroupByDayState,
        notes: notes,
        userInfo: userInfo,
        name: name,
        goal: goal,
      });
      if (data) {
        //clear store
        dispatch({
          type: 'CLEAR_ROUTINE_DATA',
        });
        Router.push('/');
      }
    }
  };

  const onKeyChange = (key) => {
    // tab numbers in page its mean day

    setActiveKey(key);
    // console.log(key);
  };

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

  const handleDynamicCreatedSelectChange = (val, day) => {
    dispatch({
      type: 'SET_MUSCLE_GROUP_BY_DAY',
      payload: { val: val, day: day },
    });
  };

  const handleNotesChange = (e) => {
    dispatch({
      type: 'SET_NOTES',
      payload: { note: e.target.value },
    });
  };

  const daysOnChange = async (value) => {
    // remember this is asyn function its callback
    // console.log(value);
    dispatch({
      type: 'DAYS_ON_CHANGE',
      payload: { value: value },
    });
  };

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
        <Row justify="end">
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
              {activeTitle}
            </div>
          </Col>
          <Col span={4} style={{ float: 'right' }}>
            <Button
              onClick={() =>
                setActiveBaseKey(
                  activeBaseKey ? (parseInt(activeBaseKey) + 1).toString() : 1
                )
              }
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
          activeKey={activeBaseKey}
          onChange={baseStepsTabChange}
          tabPosition={tabPosition}
          style={{ width: '100%', paddingLeft: 10 }}
        >
          <TabPane tab="Chose Goal" key="1">
            <Card
              onClick={() => setGoal(' Loose Weight')}
              style={{
                width: '100%',
                height: '180px',
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
                      paddingTop: '2vh',
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
                      alt=""
                      width={80}
                      height={120}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
            <br />
            {/* <Divider /> */}
            <Card
              onClick={() => setGoal('Gain Muscle')}
              style={{
                width: '100%',
                height: '180px',
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
                      paddingTop: '2vh',
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
                      alt=""
                      width={80}
                      height={120}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
            {/* <Divider /> */}
            <br />
            <Card
              onClick={() => setGoal('Get Shreded')}
              style={{
                width: '100%',
                height: '180px',
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
                      paddingTop: '2vh',
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
                      alt=""
                      width={80}
                      height={120}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </TabPane>
          <TabPane tab=" Spesify Days " tabActive key="2">
            <div style={{ fontFamily: 'fantasy' }}></div>
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
                    {muscleGroupByDayState.filter((val) => val.id == day)[0] ? (
                      muscleGroupByDayState
                        .filter((val) => val.id == day)[0]
                        .muscleGroups.map((muscle) => (
                          <Col
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={12}
                            xxl={12}
                            key={muscle}
                            style={{ padding: 5 }}
                          >
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
                                      boxShadow:
                                        'rgba(149, 157, 165, 0.2) 0px 8px 24px',
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
                                        style={{
                                          borderColor: '#3266c5ed',
                                          color: '#3266c5ed',
                                        }}
                                        onClick={() =>
                                          showDrawerWithMuscleParam(muscle)
                                        }
                                      >
                                        {/* erything between the curly braces gets evaluated immediately. This causes the setOrderData_ function to be called in every render loop.
                                        By wrapping the function with an arrow function, the evaluated code will result in a function that can be called whenever the user clicks on the button. */}
                                        Add Exercise
                                      </Button>
                                    </div>
                                  </div>
                                </>
                              }
                              //   footer={<div>Footer</div>}
                              dataSource={data.exercises
                                .filter((x) =>
                                  muscleGroupByDayState
                                    .find((val) => val.id == day)
                                    .exercises.includes(x.id)
                                )
                                .filter((y) => y.target == muscle)}
                              renderItem={(
                                item //we got exercise id lets check it
                              ) => (
                                <div className="horizonal-card-body">
                                  <ExerciseCard
                                    exercise={data.exercises.find(
                                      (x) => x.id == item.id
                                    )}
                                    muscle={muscle}
                                    day={activeKey}
                                    myLoader={() => myLoader}
                                    style={{ margin: 5 }}
                                  />
                                </div>
                                // <>{item.name},</>
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
          <TabPane tab=" Routine Notes" tabActive key="5">
            routine Name:{' '}
            <Input
              onChange={handleRoutineNameChange}
              style={{ width: '90%' }}
            ></Input>
            <br />
            Routine Notes:
            <TextArea
              rows={14}
              onChange={handleNotesChange}
              style={{ width: '90%' }}
            />
          </TabPane>
          <TabPane tab="  Save routine" tabActive key="6">
            {/* Save or send me via e-mail */}
            <br />
            <div style={{ width: '90%', height: '100%', position: 'relative' }}>
              <Image
                layout="fill"
                src="/files/routineEx.png"
                alt="Some Exercises"
                width={'80%'}
                height={300}
                style={{ paddingLeft: 80 }}
              />
            </div>
            <br />
            <Button
              // key={muscle}

              shape="round"
              style={{
                borderColor: '#3266c5ed',
                color: '#3266c5ed',
                width: '90%',
                boxShadow:
                  'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                fontFamily: 'fantasy',
              }}
              // onClick={() =>
              //   showDrawerWithMuscleParam(muscle)
              // }
            >
              {/* erything between the curly braces gets evaluated immediately. This causes the setOrderData_ function to be called in every render loop.
                                        By wrapping the function with an arrow function, the evaluated code will result in a function that can be called whenever the user clicks on the button. */}
              Send me
            </Button>
            <br />
            <Button
              // key={muscle}

              shape="round"
              style={{
                borderColor: '#3266c5ed',
                color: '#3266c5ed',
                width: '90%',
                marginTop: 15,
                boxShadow:
                  'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                fontFamily: 'fantasy',
              }}
              onClick={saveRoutine}
            >
              {/* erything between the curly braces gets evaluated immediately. This causes the setOrderData_ function to be called in every render loop.
                                        By wrapping the function with an arrow function, the evaluated code will result in a function that can be called whenever the user clicks on the button. */}
              Login/Save
            </Button>
          </TabPane>
          {/* <TabPane tab="  İnsert body informtions" tabActive key="7">
            İnsert body informtion
          </TabPane> */}
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
