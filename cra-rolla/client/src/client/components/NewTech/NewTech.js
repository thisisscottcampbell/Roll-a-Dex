import React from 'react';
import TechForm from './TechForm';
import SearchBar from './SearchBar';

const NewTech = ({ addTech, name }) => {

  return (
    <div>
      <h4 className='f4 washed-blue'>New Technique</h4>
      <TechForm addTech={addTech} name={name} />
      <SearchBar />
    </div>
  );
};

export default NewTech;