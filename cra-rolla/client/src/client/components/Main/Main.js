import React,{ useState, useEffect, useRef } from 'react';
import NewTech from '../NewTech/NewTech';
import TechList from '../TechList/TechList';
import Scroll from '../TechList/Scroll';
import axios from 'axios';

const Main = ({ name, password, token }) => {
  
  const prevName = useRef(name);
  const prevPassword = useRef(password);
  const prevToken = useRef(token);

    //INIT STATE
  const [list, setList] = useState([])//needs to be user list;
  
    //STATE FUNCTIONS
  //add tech
  const updateList = newTech => setList([...list, newTech]);
  
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

    //assign user name to variable userName
    const userObj = {
      name: prevName.current,
      password: prevName.current,
      token: prevToken.current
    }

    axios.get('http://localhost:5000/api/list', { params: {body: userObj} })
      .then(res => {
        console.log(userObj)
        console.log(res.data)
      })
      .catch(error => console.log(error.message));

  }, []);
  

  return (
    <div>
      <h2 className='f2 light-green'>{name}'s Roll-a-Dex</h2>
      <NewTech updateList={updateList} />
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