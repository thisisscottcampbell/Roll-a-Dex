import React from 'react';
import TechCard from './TechCard';
//import { Link } from 'react-router-dom';

const TechList = ({ list, deleteTech, editTech }) => {

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
        deleteTech={deleteTech}
        editTech={editTech}
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