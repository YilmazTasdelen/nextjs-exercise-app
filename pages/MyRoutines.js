import { Button, Col, Row, Table, Tabs, Statistic, List } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Store } from '../utils/Store';
import jwt from 'jsonwebtoken';
import ProgramNotes from '../components/ProgramNotes';
import data from '../utils/data';
import ExerciseCard from '../components/ExerciseCard';
import RoutineRowCard from '../components/RoutineRowCard';
const { TabPane } = Tabs;

const MyRoutines = () => {
  const { state, dispatch } = useContext(Store);
  const { muscleGroupByDayState, dayCount, dayList, notes, userInfo } = state;
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState();

  const myLoader = ({ src, width, quality }) => {
    return `http://d205bpvrqc9yn1.cloudfront.net/0003.gif`;
  };

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
        {/* {selectedRoutine ? JSON.stringify(selectedRoutine?.propgram) : 'empty'}
        {JSON.stringify(
          data.exercises.filter((x) =>
            selectedRoutine?.propgram?.days[0].exerciseReps
              .map(function (obj) {
                return obj.id;
              })
              .includes(x.id)
          )
        )} */}
        {!routines ? (
          <div>asd</div>
        ) : (
          routines.map((routine) => (
            <Button
              key={routine._id}
              type="dashed"
              //shape="round"
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
                  <Row>
                    {day.muscleGroups.map((muscleGroup) => (
                      /***start of list  */
                      <Col span={12} key={muscleGroup} style={{ padding: 5 }}>
                        <List
                          key={muscleGroup}
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
                                {muscleGroup}
                                <div
                                  style={{
                                    float: 'right',
                                  }}
                                ></div>
                              </div>
                            </>
                          }
                          dataSource={selectedRoutine.propgram?.days[
                            day.id - 1
                          ]?.exerciseReps.map((obj) => {
                            return {
                              reps: obj,
                              exercise: data.exercises.find(
                                (x) => x.id == obj.id
                              ),
                            };
                          })}
                          renderItem={(
                            item //we got exercise and reps by day here
                          ) => (
                            <div className="horizonal-card-body">
                              {JSON.stringify(item)}

                              <RoutineRowCard
                                exercise={item.exercise}
                                rep={item.reps.rep}
                                set={item.reps.set}
                                muscle={muscleGroup}
                                day={day}
                                myLoader={() => myLoader}
                                style={{ margin: 5 }}
                              />
                            </div>
                            // <>{item.name},</>
                          )}
                        />
                      </Col>
                      /**end of list  */
                    ))}
                  </Row>
                </TabPane>
              ))
            : ''}

          {selectedRoutine ? (
            <TabPane
              tab="Program Notes"
              key="8"
              style={{
                fontFamily: 'Verdana',
              }}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <ProgramNotes
                    title="Name"
                    text={selectedRoutine.propgram.name}
                  />
                </Col>
                <Col span={12}>
                  <ProgramNotes
                    title="Goal"
                    text={selectedRoutine.propgram.goal}
                  />
                </Col>
                <Col span={12}>
                  <ProgramNotes
                    title="Notes"
                    text={selectedRoutine.propgram.notes}
                  />
                </Col>
                <Col span={12}>
                  <ProgramNotes
                    title="Create Date"
                    text={selectedRoutine.createdAt
                      .slice(0, 16)
                      .replace('T', ' ')}
                  />
                </Col>
              </Row>
            </TabPane>
          ) : (
            ''
          )}
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
