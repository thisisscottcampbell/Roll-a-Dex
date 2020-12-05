import React from 'react';

const Scroll = props => {
  return (
    <div style={{ overflowY: 'scroll', border: '13px', height: '750px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;