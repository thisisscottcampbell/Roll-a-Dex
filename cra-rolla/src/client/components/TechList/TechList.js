import React, { useState } from 'react';
import TechCard from './TechCard';
//import { Link } from 'react-router-dom';

const TechList = ({ list }) => {

  //state, initially, is the list from props
    //BUT, pass onClick that allows to update that list to just single item  

  // const [techList, updateList] = useState(list);

  //const handleClick = () => {console.log('click')};

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
      <h3>i am tech list</h3>
      {
        techniqueEntries
      }
    </div>
  );
};


export default TechList;