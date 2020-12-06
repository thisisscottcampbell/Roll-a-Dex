import React, { useState, useEffect, useRef } from 'react';
import NewTech from '../NewTech/NewTech';
import TechList from '../TechList/TechList';
import robots from '../../bots/robots';
import Scroll from '../TechList/Scroll';
import { uuid } from 'uuidv4';

const db = robots;

const Main = ({ userName }) => {
  
  const prevProp = useRef(userName);

  const findUser = name => db.some(user=> user.name === name);

  const userExists = findUser(userName);

  if(!userExists) db.push({
    id: uuid(), 
    name: userName, 
    email: `${userName}@userName.com`, 
    list: [] 
  });

  const getUserList = userName => {
    const users = db.filter(user => user.name === userName);
    const list = users[0].list;
    return list;
  };


  const [list, setList] = useState(() => getUserList(userName));
  const len = useRef(list.length);

  const updateList = newTech => setList([...list, newTech])
  
  useEffect(() => {
    if (len.current === list.length) return db;
  
    const userName = prevProp.current;
    const tech = list[list.length - 1];

    let userIdx;

    db.forEach((user, i) => {
      if (user.name === userName) userIdx = i;
    })

    db[userIdx].list.push(tech);

    console.log('useEffect:', prevProp.current, ':', list);
  }, [list]);
  

  console.log(list);
  return (
    <div>
      <h2 className='f2 washed-red'>{userName}'s Roll-a-Dex</h2>
      <NewTech updateList={updateList} />
      <Scroll>
        <TechList list={list} />
      </Scroll> 
    </div>
  );
};

export default Main