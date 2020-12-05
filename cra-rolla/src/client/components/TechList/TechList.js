import React, { useState } from 'react';
import TechCard from './TechCard';
//import { Link } from 'react-router-dom';

const TechList = ({ list }) => {

  const techniqueEntries = list.map(tech => {
    // <Link>
    console.log(tech);
     return <TechCard 
        key={tech.id}
        id={tech.id}
        title={tech.title}
        date={tech.date}
        note={tech.note}
        video={tech.video}
        //handleClick={handleClick}
      />
    // </Link> 
  })

  return (
    <div>
      {
        techniqueEntries
      }
    </div>
  );
};


export default TechList;