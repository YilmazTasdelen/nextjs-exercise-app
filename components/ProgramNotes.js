import React from 'react';

const ProgramNotes = (props) => {
  return (
    <div style={{ color: '#7588ed', padding: 5 }}>
      <div
        style={{
          color: '#2d2d2d',

          padding: 5,
        }}
      >
        {props.title} : <br />
        <span style={{ color: '#adadb1', fontWeight: 'lighter' }}>
          {' '}
          {props.text}
        </span>
      </div>
    </div>
  );
};

export default ProgramNotes;
