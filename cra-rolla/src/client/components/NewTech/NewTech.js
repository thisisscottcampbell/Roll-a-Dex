import React from 'react';
import TechForm from './TechForm';
import SearchBar from './SearchBar';

const NewTech = ({ updateTech }) => {

  return (
    <div>
      <h4>i am newtech</h4>
      <TechForm updateTech={updateTech} />
      <SearchBar />
    </div>
  );
};

export default NewTech;