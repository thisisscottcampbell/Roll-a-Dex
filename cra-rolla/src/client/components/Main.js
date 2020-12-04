import React from 'react';
import NewTech from './NewTech/NewTech';
import TechList from './TechList/TechList';


const Main = ({ userName }) => {

  //hit db, check if userName exists
    //if so,
      //render list
    //if not,
      //add user to db

  return (
    <div>
      <h2>What Up! {userName}</h2>
      <NewTech />
      <TechList />
    </div>
  );
};

export default Main;