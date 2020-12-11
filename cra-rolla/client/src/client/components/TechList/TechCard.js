import React from 'react';

const TechCard = ({ title, date, note, video, deleteTech, editTech, _id }) => {
  
  const handleDelete = techId => deleteTech(techId);
  const handleEdit = techId => editTech(techId)

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <div>
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
      <p>{video}</p>  
      <button 
        onClick={() => handleDelete(_id)}
        className="f6 bg-washed-blue grow no-underline br-pill ba ph3 pv2 mb2 dib light-red"
        style={{marginTop: '.5'}}
      >Delete</button>
      <br/>
      <button 
        onClick={()=> handleEdit(_id)}
        className="f6 bg-washed-blue grow no-underline br-pill ba ph3 pv2 mb2 dib light-green"
        style={{marginTop: '.5'}}
      >Edit</button>
      <h6>{date}</h6>
    </div>
  );
};

export default TechCard;