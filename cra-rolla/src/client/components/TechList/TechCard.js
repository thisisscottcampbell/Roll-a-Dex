import React from 'react';

const TechCard = ({ title, date, note, video }) => {

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <div>
        <h1>{title}</h1>
        <h4>{date}</h4>
        <p>{note}</p>
      </div>
      <p>{video}</p>
    </div>
  );
};

export default TechCard;