import React,{ useState, useEffect, useRef } from 'react';
import NewTech from '../NewTech/NewTech';
import TechList from '../TechList/TechList';
import Scroll from '../TechList/Scroll';
import axios from 'axios';

const Main = ({ name, password, token }) => {
  
  const prevName = useRef(name);
  const prevPassword = useRef(password);
  const prevToken = useRef(token);

  console.log(prevName, prevPassword, prevToken);

    //INIT STATE
  const [list, setList] = useState([])//needs to be user list;
  const [newTech, setTech] = useState({})
  
    //STATE FUNCTIONS
  //add tech
  const addTech = tech => setTech(tech);

  
  //delete tech
  const deleteTech = id => {
    let idx;

    list.forEach((tech, i) => {
      if (id.current === tech.id) idx = i
    })

    list.splice(idx, 1)

    setList([...list])
  };
  
    //CDM: USE EFFECT FUNCTIONALITY
  useEffect(() => {
    console.log('run for cdm');

    //assign user name to variable userName
    const userObj = {
      name: prevName.current,
      password: prevPassword.current,
      token: prevToken.current
    }

    // console.log(userObj.token.token)

    axios.get('http://localhost:5000/api/list', {
      headers: {
        'x-auth-token': userObj.token.token
      }
     })
      .then(res => {
        setList((list) => [...list, ...res.data])
      })
      .catch(error => console.log(error.message));

  },[]);

   //Update list USE EFFECT
   useEffect(() => {

      if (!newTech.title) return;

      console.log('tech', newTech)
      console.log('run for tech');

      axios.post('http://localhost:5000/api/list', {newTech})
        .then(res => {
          setList((list) => [...list, res.data])
        })
        .catch(error => console.log(error.message))
   }, [newTech])
  

  return (
    <div>
      <h2 className='f2 light-green'>{name}'s Roll-a-Dex</h2>
      <NewTech addTech={addTech} name={name} />
      <Scroll>
        <TechList 
          list={list}
          deleteTech={deleteTech}
          //editTech={editTech} 
        />
      </Scroll> 
    </div>
  );
};

export default Main