import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';

const ExerciseCard = (props) => {
  const myLoader = ({ src, width, quality }) => {
    return `http://d205bpvrqc9yn1.cloudfront.net/0003.gif`;
  };
  return (
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
  );
};

export default ExerciseCard;
