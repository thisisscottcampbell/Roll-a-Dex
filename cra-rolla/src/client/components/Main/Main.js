import React, { useState, useEffect, useRef } from 'react';
import NewTech from '../NewTech/NewTech';
import TechList from '../TechList/TechList';
import robots from '../../bots/robots';
const db = robots;

const Main = ({ userName }) => {
  
  const prevProp = useRef(userName);

  const getUserList = userName => {
    const users = db.filter(user => user.name === userName);
    const list = users[0].list;
    return list;
  };

  // *** SEE NOTE IN ROBOTS ***

  const [list, setList] = useState(() => getUserList(userName));

  const updateList = newTech => setList([...list, newTech])
  
  useEffect(() => {
   
    const userName = prevProp.current;
    const tech = list[list.length - 1];

    let userIdx;

    db.forEach((user, i) => {
      console.log(user.name === userName)
      if (user.name === userName) userIdx = i;
    })

    db[userIdx].list.push(tech);
    console.log(db[userIdx].list);

    console.log('useEffect:', prevProp.current, ':', list);
  }, [list]);
  

  console.log(list);
  return (
    <div>
      <h2>What Up! {userName}</h2>
      <NewTech updateList={updateList} />
      <TechList list={list} /> 
    </div>
  );
};

export default Main