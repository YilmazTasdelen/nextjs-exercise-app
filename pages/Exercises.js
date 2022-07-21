import { QuestionCircleOutlined, RollbackOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Divider,
  Input,
  Row,
  Select,
  Card,
  List,
  Checkbox,
} from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Model, { IExerciseData, IMuscleStats } from 'react-body-highlighter';
import data from '../utils/data';
const { Option } = Select;
const { Meta } = Card;

const Exercises = () => {
  const [exercises, setexercises] = useState(data.exercises);
  const [filters, setFilters] = useState({
    target: ['pectorals'],
    equipment: 'dumbbell',
    exerciseName: '',
  });

  const [muscleGroupsMap, setMuscleGroupsMap] = useState();
  /*Back 
  -------------------------------------
 trapezius                'levator scapulae', 'traps',
 upper-back				'upper back', 'lats',
 lower-back				'spine',
 
 /* Chest 
 --------------------------------
 chest 				'pectorals','serratus anterior',
 
 /* Arms 
 -----------------------------
 biceps 				 'biceps',
 triceps				 'triceps',
 forearm				  'forearms',
 back-deltoids          'delts',
 front-deltoids            'delts',
 
 /* Abs 
 --------------------------
 abs         		 'abs',
 obliques   			  'abs',
 
 /* Legs 
 -------------------------------
 adductor         	'adductors',
 hamstring 			 'hamstrings',
 quadriceps			 'quads',
 abductors			'abductors',
 calves				'calves',
 gluteal				'glutes',
 
 /* Head 
 --------------------------------
 head   --------
 neck     'levator scapulae', 'traps',*/

  useEffect(() => {
    const mucleMapsBetweenImageAndDataBase = new Map();
    /*Back */
    mucleMapsBetweenImageAndDataBase.set('trapezius', [
      'levator scapulae',
      'traps',
    ]);
    mucleMapsBetweenImageAndDataBase.set('upper-back', ['upper back', 'lats']);
    mucleMapsBetweenImageAndDataBase.set('lower-back', ['spine', 'lats']);
    /* Chest */
    mucleMapsBetweenImageAndDataBase.set('chest', [
      'pectorals',
      'serratus anterior',
    ]);
    /* Arms*/
    mucleMapsBetweenImageAndDataBase.set('biceps', ['biceps']);
    mucleMapsBetweenImageAndDataBase.set('triceps', ['triceps']);
    mucleMapsBetweenImageAndDataBase.set('forearm', ['forearms']);
    mucleMapsBetweenImageAndDataBase.set('back-deltoids', ['delts']);
    mucleMapsBetweenImageAndDataBase.set('front-deltoids', ['delts']);
    /* Abs */
    mucleMapsBetweenImageAndDataBase.set('abs', ['abs']);
    mucleMapsBetweenImageAndDataBase.set('obliques', ['abs']);
    /* Legs */
    mucleMapsBetweenImageAndDataBase.set('adductor', ['adductors']);
    mucleMapsBetweenImageAndDataBase.set('hamstring', ['hamstrings']);
    mucleMapsBetweenImageAndDataBase.set('quadriceps', ['quads']);
    mucleMapsBetweenImageAndDataBase.set('abductors', ['abductors']);
    mucleMapsBetweenImageAndDataBase.set('calves', ['calves']);
    mucleMapsBetweenImageAndDataBase.set('gluteal', ['glutes']);
    /* Head */
    mucleMapsBetweenImageAndDataBase.set('neck', ['levator scapulae', 'traps']);
    setMuscleGroupsMap(mucleMapsBetweenImageAndDataBase);
  }, []);

  const onlyCardioChange = (e) => {
    //'cardiovascular system'
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked)
      setFilters({
        target: ['cardiovascular system'],
        equipment: filters.equipment,
        exerciseName: filters.exerciseName,
      });
    else
      setFilters({
        target: ['pectorals'],
        equipment: filters.equipment,
        exerciseName: filters.exerciseName,
      });
  };

  const handleTargetChange = (value) => {
    setFilters({
      target: value,
      equipment: filters.equipment,
      exerciseName: filters.exerciseName,
    });
  };

  const handleNameChange = (e) => {
    setFilters({
      target: filters.target,
      equipment: filters.equipment,
      exerciseName: e.target.value,
    });
  };

  const handleEquipmentChange = (value) => {
    setFilters({
      target: filters.target,
      equipment: value,
      exerciseName: filters.exerciseName,
    });
  };

  useEffect(() => {
    console.log('target changed', filters.target);
    // if (filters.length == 0) {
    //   console.log('with target');
    setexercises(
      data.exercises.filter(
        (x) =>
          (filters.target.length == 0 ||
            filters.target.indexOf(x.target) != -1) &&
          (!filters.equipment || x.equipment === filters.equipment) &&
          (!filters.exerciseName ||
            x.name.toLowerCase().includes(filters.exerciseName))
      )
    );
    // } else {
    //   console.log('without target');
    //   setexercises(
    //     data.exercises.filter(
    //       (x) =>
    //         (!filters.equipment || x.equipment === filters.equipment) &&
    //         (!filters.exerciseName ||
    //           x.name.toLowerCase().includes(filters.exerciseName))
    //     )
    //   );
    // }
  }, [filters]);

  const [flip, setFlip] = useState('flip-card-inner');

  const [frontView, setFrontView] = useState('front');

  const trunBodyImage = () => {
    console.log('rotated');
    if (flip === 'flip-card-inner') {
      setFlip('flip-card-inner-rotated');
    } else {
      setFlip('flip-card-inner');
    }
    frontView == 'front' ? setFrontView('front') : setFrontView('back');
  };

  const myLoader = ({ src, width, quality }) => {
    return `http://d205bpvrqc9yn1.cloudfront.net/${src}`;
  };
  const modelFrontData = [
    { muscles: ['chest', 'triceps', 'front-deltoids', 'quadriceps', 'abs'] },
    { muscles: ['chest'] },
    { muscles: ['quadriceps'] },
    { muscles: ['front-deltoids'] },
  ];
  /**
 * /* Back 
trapezius
upper-back
lower-back

/* Chest 
chest

/* Arms 
biceps
triceps
forearm
back-deltoids
front-deltoids

/* Abs 
abs
obliques

/* Legs 
adductor
hamstring
quadriceps
abductors
calves
gluteal

/* Head 
head
neck
 * 
 * 
 */
  const modelBackData = [
    {
      name: 'test',
      muscles: [
        'trapezius',
        'upper-back',
        // 'lower-back',
        'calves',
        // 'adductor',
        'hamstring',
        'gluteal',
      ],
    },
    { name: 'test', muscles: ['trapezius'] },
    { muscles: ['calves'] },
    { muscles: ['gluteal'] },
  ];

  const handleClick = React.useCallback(
    ({ muscle, data }) => {
      const { exercises, frequency } = data;

      //alert(muscle);
      if (muscleGroupsMap && muscle && muscle != 'head') {
        // console.log(muscleGroupsMap.get(muscle.toString()));
        setFilters({
          target: muscleGroupsMap.get(muscle.toString()),
          equipment: '',
          exerciseName: filters.exerciseName,
        });
      }
    },
    [modelFrontData]
  );
  return (
    <Row>
      <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}></Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={4}
        xl={4}
        xxl={4}
        style={{ backgroundColor: 'white', paddingLeft: 15, paddingRight: 15 }}
      >
        <div
          style={{
            padding: 6,
            paddingTop: 12,
            fontFamily: 'Verdana',
            color: '#ab96b0',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Click the muscle for exercises which targets it or use filters
        </div>
        <div className="flip-card">
          <div className={flip}>
            <div
              className={
                frontView == 'front'
                  ? 'flip-card-front-reverted'
                  : 'flip-card-front'
              }
            >
              <Model
                data={modelFrontData}
                highlightedColors={[
                  '#ccbf93',
                  '#ab96b0',
                  '#e65a5a',
                  '#db2f2f',
                  '#95cc93',
                ]}
                style={{ padding: 15, display: 'flow-root' }}
                onClick={handleClick}
              />
            </div>
            <div
              className={
                frontView == 'back'
                  ? 'flip-card-back-reverted'
                  : 'flip-card-front'
              }
            >
              <Model
                type="posterior"
                data={modelBackData}
                highlightedColors={[
                  '#ccbf93',
                  '#ab96b0',
                  '#e65a5a',
                  '#db2f2f',
                  '#95cc93',
                ]}
                style={{ padding: 15 }}
                onClick={handleClick}
              />
            </div>
          </div>
          <Button
            type="dashed"
            shape="round"
            style={{
              width: '100%',
              color: '#1890ff',
              fontFamily: 'Verdana',
              marginTop: 15,
            }}
            onClick={() => trunBodyImage()}
          >
            <RollbackOutlined

            //   style={{ marginLeft: '15%' }}
            />{' '}
            Turn The body
          </Button>
        </div>
      </Col>
      <Col span={16}>
        Target:
        <Select
          mode="multiple"
          onChange={handleTargetChange}
          value={filters.target}
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
          value={filters.equipment}
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
        <br />
        <Checkbox onChange={onlyCardioChange}>
          Show Only Cardio Exercises
        </Checkbox>
        {/* <Button
          type="dashed"
          shape="round"
          style={{ width: '100%', color: '#1890ff', fontFamily: 'Verdana' }}
          // onClick={() => handleAddExercises()}
        >
          Filter
        </Button> */}
        <Divider />
        <List
          grid={{
            gutter: 6,
            column: 6,
          }}
          dataSource={exercises}
          renderItem={(exercise) => (
            <List.Item>
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
                    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                    // minHeight: 320,
                  }}
                  cover={
                    <Image
                      //onClick={() => showModal(exercise.id)}
                      layout="responsive"
                      loader={myLoader}
                      src={`${exercise.id}.gif`}
                      alt=""
                      width={100}
                      height={100}
                      style={{ padding: 15, borderBottom: '1px solid #f0f0f0' }}
                    />
                  }
                >
                  <span style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.85)' }}>
                    {exercise.name}
                  </span>
                  <br />
                  <span style={{ fontSize: 10, color: 'rgba(0, 0, 0, 0.45)' }}>
                    <br />
                    <span style={{ fontWeight: 'bold' }}>target :</span>{' '}
                    {exercise.bodyPart}
                    <br />
                    <span style={{ fontWeight: 'bold' }}>equipment :</span>{' '}
                    {exercise.equipment}
                  </span>
                </Card>
              </label>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default Exercises;
