import React from 'react';

const ProgramNotes = (props) => {
  return (
    <div style={{ color: '#7588ed', padding: 5 }}>
      <div
        style={{
          color: '#2d2d2d',
          fontWeight: 550,
          fontFamily: 'Verdana',
          color: '#282525d9',
          fontSize: 12,
          padding: 5,
        }}
      >
        {props.title} : <br />
        <br />
        <span style={{ color: 'rgba(0, 0, 0, 0.45)', fontWeight: 'lighter' }}>
          {' '}
          {props.text}
        </span>
      </div>
    </div>
  );
};

export default ProgramNotes;
