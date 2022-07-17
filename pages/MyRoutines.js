import { Col, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Store } from '../utils/Store';
import jwt from 'jsonwebtoken';

const MyRoutines = () => {
  const { state, dispatch } = useContext(Store);
  const { muscleGroupByDayState, dayCount, dayList, notes, userInfo } = state;
  const [routines, setRoutines] = useState([]);

  const fetchRoutines = async () => {
    const { data } = await axios.get('/api/routine', {
      headers: { authorization: `Bearer ${userInfo.token}` },
    });
    console.log(data);
    setRoutines(data);
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  return (
    <Row>
      <Col span={2}></Col>
      <Col span={4} style={{ backgroundColor: 'white', paddingRight: 25 }}>
        asdasdasdasdsad
        {!routines ? (
          <div>asd</div>
        ) : (
          routines.map((routine) => (
            <div key={routine.propgram._id}>
              {routine.propgram.name ??
                routine.createdAt.slice(0, 16).replace('T', ' ')}
            </div>
          ))
        )}
      </Col>
      <Col span={16}></Col>
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
