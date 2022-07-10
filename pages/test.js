import React from 'react';
import Model, { IExerciseData, IMuscleStats } from 'react-body-highlighter';

export default function Component() {
  const data = [
    { name: 'Bench Press', muscles: ['chest', 'triceps', 'front-deltoids'] },
    { name: 'Push Ups', muscles: ['chest'] },
  ];

  const handleClick = React.useCallback(
    ({ muscle, data }) => {
      const { exercises, frequency } = data;

      alert(
        `You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(
          exercises
        )}`
      );
    },
    [data]
  );

  return (
    <Model
      data={data}
      style={{ width: '20rem', padding: '5rem' }}
      onClick={handleClick}
    />
  );
}
