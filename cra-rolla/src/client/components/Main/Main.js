import React, { useState, useEffect, useRef } from 'react';
import NewTech from '../NewTech/NewTech';
import TechList from '../TechList/TechList';
import robots from '../../bots/robots';
import Scroll from '../TechList/Scroll';
import { uuid } from 'uuidv4';

const db = robots;

const Main = ({ userName }) => {
  
  //keep value of passed in user name
  const prevProp = useRef(userName);

  //returns true or false if user is in db
  const findUser = name => db.some(user=> user.name === name);

  //assign true or false to label
  const userExists = findUser(userName);

  //if the user does not exist, add to db with user obj
  if(!userExists) db.push({
    id: uuid(), 
    name: userName, 
    email: `${userName}@userName.com`, 
    list: [] 
  });
  
  //grab list of techniques off of user obj
  const getUserList = userName => {
    const users = db.filter(user => user.name === userName);
    const list = users[0].list;
    return list;
  };


  //set state, the user's list of techniques
  const [list, setList] = useState(() => getUserList(userName));

  //assign true to variable to determine if we are running on first render
  let firstRender = useRef(true);

  //when we get a new technique, we update state
  const updateList = newTech => setList([...list, newTech])
  
  useEffect(() => {

    //only update firstRender to false if on first render
    if (firstRender.current) return firstRender.current = false;

    //assign user name to variable userName
    const userName = prevProp.current;

    //assign newly added technique to state list to a variable tech
    const tech = list[list.length - 1];

    //initialzie a variable userIdx
    let userIdx;

    //find the index of the user's user obj in the db, update userIdx
    db.forEach((user, i) => {
      if (user.name === userName) userIdx = i;
    })

    //assign current user's data to a variable
    const userData = db[userIdx];

    //add new technique to the current user's list of techniques
    userData.list.push(tech);

  }, [list]);
  

  
  return (
    <div>
      <h2 className='f2 light-green'>{userName}'s Roll-a-Dex</h2>
      <NewTech updateList={updateList} />
      <Scroll>
        <TechList list={list} />
      </Scroll> 
    </div>
  );
};

export default Main