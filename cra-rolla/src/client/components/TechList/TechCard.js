import React from 'react';

const TechCard = ({ title, date, note, video }) => {

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <div>
        <h6>{date}</h6>
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
      <p>{video}</p>  
      <button 
        //onClick={handleClick}
        className="f6 bg-washed-blue grow no-underline br-pill ba ph3 pv2 mb2 dib light-red"
        style={{marginTop: '.5'}}
      >Delete</button>
      <br/>
      <button 
        //onClick={handleClick}
        className="f6 bg-washed-blue grow no-underline br-pill ba ph3 pv2 mb2 dib light-green"
        style={{marginTop: '.5'}}
      >Edit</button>
    </div>
  );
};

export default TechCard;