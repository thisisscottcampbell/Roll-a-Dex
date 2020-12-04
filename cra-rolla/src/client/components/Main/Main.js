import React, { useState, useEffect } from 'react';
import NewTech from '../NewTech/NewTech';
import TechList from '../TechList/TechList';
import robots from '../../bots/robots';


const Main = ({ userName }) => {
  
  const findUser = userName => {
    const users = robots.filter(bot => bot.name === userName);
    const list = users[0].list;
    return list;
  };

  //hit db, check if userName exists
  const userList = findUser(userName);

    //if so,
      //set userObj to the user object from database
    //if not,
      //add user to db
      //set userObj to the newly createde user object in database

  const [list, setList] = useState(userList);
  

  // useEffect((propName) => {
  //   console.log(propName);
  //   findUser(propName);
  // }, []);
  

  console.log(list);
  return (
    <div>
      <h2>What Up! {userName}</h2>
      <NewTech />
      <TechList list={list} /> 
    </div>
  );
};

export default Main