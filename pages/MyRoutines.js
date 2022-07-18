import { Button, Col, Row, Table, Tabs, Statistic } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Store } from '../utils/Store';
import jwt from 'jsonwebtoken';
const { TabPane } = Tabs;

const MyRoutines = () => {
  const { state, dispatch } = useContext(Store);
  const { muscleGroupByDayState, dayCount, dayList, notes, userInfo } = state;
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState();

  const fetchRoutines = async () => {
    const { data } = await axios.get('/api/routine', {
      headers: { authorization: `Bearer ${userInfo.token}` },
    });
    console.log(data);
    setRoutines(data);
  };

  useEffect(() => {
    console.log('on-load: ', routines[0]);
    if (routines.length > 0) setSelectedRoutine(routines[0]);
  }, [routines]);

  useEffect(() => {
    fetchRoutines();
  }, []);

  const changeSelectedProgram = (programId) => {
    console.log(programId);
    console.log(
      'selected : ',
      routines.find((routine) => routine._id == programId)
    );

    setSelectedRoutine(
      routines.find((obj) => {
        return obj._id === programId;
      })
    );
    //setSelectedRoutine(routines.find((routine) => routine.id == programId));
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Row>
      <Col span={2}></Col>
      <Col
        span={4}
        style={{
          backgroundColor: 'white',
          paddingRight: 25,
          borderRight: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        {selectedRoutine ? selectedRoutine.createdAt : 'empty'}

        {!routines ? (
          <div>asd</div>
        ) : (
          routines.map((routine) => (
            <Button
              key={routine._id}
              type="dashed"
              shape="round"
              style={{
                width: '100%',
                color: '#1890ff',
                fontFamily: 'Verdana',
                marginBottom: 10,
              }}
              onClick={() => changeSelectedProgram(routine._id)}
            >
              <div>
                {routine.propgram.name?.trim() != '' && routine.propgram.name
                  ? routine.propgram.name
                  : routine.createdAt.slice(0, 16).replace('T', ' ')}
              </div>
            </Button>
          ))
        )}
      </Col>
      <Col span={16} style={{ paddingLeft: 25 }}>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          {/* <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane> */}

          {selectedRoutine
            ? selectedRoutine.propgram.days.map((day) => (
                <TabPane tab={'Day ' + day.id} key={day.id}>
                  <div>
                    {day.muscleGroups.map((muscleGroup) => (
                      <div key={muscleGroup}>{muscleGroup}</div>
                    ))}
                  </div>
                </TabPane>
              ))
            : ''}

          <TabPane
            tab="Program Notes"
            key="3"
            style={{
              fontFamily: 'Verdana',
            }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <div
                  style={{
                    color: '#7588ed',
                    fontWeight: 'bold',
                    padding: 5,
                  }}
                >
                  Name :{' '}
                </div>{' '}
                <br />
                {selectedRoutine.propgram.name}
              </Col>
              <Col span={12}>
                <div
                  style={{
                    color: '#7588ed',
                    fontWeight: 'bold',
                    padding: 5,
                  }}
                >
                  Goal :{' '}
                </div>
                <br /> {selectedRoutine.propgram.goal}
              </Col>
              <Col span={12}>
                <div
                  style={{
                    color: '#7588ed',
                    fontWeight: 'bold',
                    padding: 5,
                  }}
                >
                  {' '}
                  Notes:{' '}
                </div>
                <br /> <span>{selectedRoutine.propgram.notes}</span>
              </Col>
              <Col span={12}>
                <div
                  style={{
                    color: '#7588ed',
                    fontWeight: 'bold',
                    padding: 5,
                  }}
                >
                  {' '}
                  Create Date:{' '}
                </div>{' '}
                <br />
                {selectedRoutine.createdAt}
              </Col>
            </Row>

            <br />

            <br />

            <br />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default MyRoutines;

// export async function getStaticProps() {
//     const res = await fetch();
//     const data = await res.json();

//     return {
//       props: {
//         data,
//       },
//     };
//   }
