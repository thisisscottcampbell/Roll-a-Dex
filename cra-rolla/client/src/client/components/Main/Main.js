import React,{ useState, useEffect, useRef } from 'react';
import NewTech from '../NewTech/NewTech';
import TechList from '../TechList/TechList';
import Scroll from '../TechList/Scroll';
import axios from 'axios';

const Main = ({ name, password, token }) => {
  
  //const prevName = useRef(name);
  //const prevPassword = useRef(password);
  const prevToken = useRef(token);
  
  //console.log(prevName, prevPassword, prevToken);

    //INIT STATE
  const [list, setList] = useState([])//needs to be user list;
  const [newTech, setTech] = useState({})
  const [deleteID, setDeleteID] = useState('');
  
    //STATE FUNCTIONS
  //add tech
  const addTech = tech => setTech(tech);
  //delete tech
  const deleteTech = id => {
    let idx;

    list.forEach((tech, i) => {
      if (id === tech._id) idx = i
    })

    list.splice(idx, 1)

    setDeleteID(id);
    setList([...list])
  };
  
  //USE EFFECT

    //"CDM" USE EFFECT 
  useEffect(() => {
    console.log('run for cdm');

    const sendToken = prevToken.current.token;

    axios.get('http://localhost:5000/api/list', {
      headers: {
        'x-auth-token': sendToken
      }
     })
      .then(res => {
        setList((list) => [...list, ...res.data]);
      })
      .catch(error => console.log(error.message));

  },[]);

   //"tech" USE EFFECT
   useEffect(() => {

      if (!newTech.title) return;

      const sendToken = prevToken.current.token;

      axios.post('http://localhost:5000/api/list', 
        {newTech},
        { headers: {
        'x-auth-token': sendToken
        }
      })
        .then(res => {
          setList((list) => [...list, res.data])
        })
        .catch(error => console.log(error.message))
   }, [newTech])
  

   //"delete" USE EFFECT
   useEffect(() => {
 
     console.log('run delete');

      const sendToken = prevToken.current.token;

      axios.delete(`http://localhost:5000/api/list/${deleteID}`, 
          { headers: {
            'x-auth-token': sendToken
          }
      })
        .then(res => {
          setList((list) => [...list, res.data])
        })
        .catch(error => console.log(error.message))


    

   }, [deleteID], () => console.log(list));

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