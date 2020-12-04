import React from 'react';

const TechCard = ({ title, date, note, video }) => {

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <h1>Card</h1>
      <h6>i am tech item</h6>
      <h2>{title}</h2>
      <h4>{date}</h4>
      <p>{note}</p>
      <p>{video}</p>
    </div>
  );
};

export default TechCard;