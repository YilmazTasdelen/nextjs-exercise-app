import React from 'react';

const ProgramNotes = (props) => {
  return (
    <div style={{ color: '#7588ed', fontWeight: 'bold', padding: 5 }}>
      <div
        style={{
          color: '#7588ed',
          fontWeight: 'bold',
          padding: 5,
        }}
      >
        {props.title} : <br />
        <span style={{ color: '#adadb1' }}> {props.text}</span>
      </div>
    </div>
  );
};

export default ProgramNotes;
