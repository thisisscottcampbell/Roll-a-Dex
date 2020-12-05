import React from 'react';
import TechForm from './TechForm';
import SearchBar from './SearchBar';

const NewTech = ({ updateList }) => {

  return (
    <div>
      <h4>i am newtech</h4>
      <TechForm updateList={updateList} />
      <SearchBar />
    </div>
  );
};

export default NewTech;