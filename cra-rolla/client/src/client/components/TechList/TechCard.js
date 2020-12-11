import React, { useState } from 'react';
import EditTechForm from './EditTechForm'

const TechCard = ({ title, date, note, video, deleteTech, editTech, _id }) => {
  
  const handleDelete = techId => deleteTech(techId);

  const [showForm, setForm] = useState(false);


 if (!showForm) return (
    
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
        onClick={()=> setForm(true)}
        className="f6 bg-washed-blue grow no-underline br-pill ba ph3 pv2 mb2 dib light-green"
        style={{marginTop: '.5'}}
      >Edit</button>
      <h6>{date}</h6>
    </div>
  );
  return (
    <EditTechForm 
      setForm={setForm} 
      editTech={editTech} 
      title={title} 
      note={note}
      date={date} 
      _id={_id} 
    />
  )
};

export default TechCard;