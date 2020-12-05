import React from 'react';
import TechForm from './TechForm';
import SearchBar from './SearchBar';

const NewTech = ({ updateList }) => {

  return (
    <div>
      <h4 className='f4 washed-blue'>Today's Technique</h4>
      <TechForm updateList={updateList} />
      <SearchBar />
    </div>
  );
};

export default NewTech;