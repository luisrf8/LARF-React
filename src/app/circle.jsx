import React from 'react';

const Circle = ({ x, y }) => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        position: 'absolute',
        left: x,
        top: y,
      }}
    ></div>
  );
};

export default Circle;
