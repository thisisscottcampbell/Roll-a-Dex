import React,{ useState, useEffect, useRef } from 'react';
import NewTech from '../NewTech/NewTech';
import TechList from '../TechList/TechList';
import Scroll from '../TechList/Scroll';
import axios from 'axios';

const Main = ({ name, password, token }) => {
  
  const prevToken = useRef(token);

  const isTech = useRef(false);
  const isDelete = useRef(false);
  const isPut = useRef(false);

    //INIT STATE
  const [list, setList] = useState([])//needs to be user list;
  const [newTech, setTech] = useState({})
  const [deleteID, setDeleteID] = useState('');
  const [putObj, setPutObj] = useState({})
  
    //STATE FUNCTIONS
  //get all
  const fetchAll = (token) => {
    axios
    .get('http://localhost:5000/api/list', {
      headers: {
        'x-auth-token': token
        }
      })
    .then(res => setList(res.data))
    .catch(error => console.log(error.message));
  }
  //add tech
  const addTech = tech => {
    isTech.current = true;
    setTech(tech)
  };
  //delete tech
  const deleteTech = id => {
    let idx;

    list.forEach((tech, i) => {
      if (id === tech._id) idx = i
    })

    list.splice(idx, 1);

    isDelete.current = true;
    setDeleteID(id);
    setList([...list])
  };
  //put tech
  const editTech = (putObj) => {
    isPut.current = true;
    setPutObj(putObj)
  };

  
    //USE EFFECT
  //"cdm"
  useEffect(() => {
    console.log('run for cdm');

    const sendToken = prevToken.current.token;

    axios
    .get('http://localhost:5000/api/list', {
      headers: {
        'x-auth-token': sendToken
        }
      }
    )
    .then(res => setList(res.data))
    .catch(error => console.log(error.message));

  },[]);

  //"post" 
  useEffect(() => {

    if (!isTech.current) return;

    const sendToken = prevToken.current.token;

    axios
    .post('http://localhost:5000/api/list', 
      {newTech},
        { headers: {
        'x-auth-token': sendToken
        }
      }
    )
    .then(res => setList((list) => [...list, res.data]))
    .catch(error => console.log(error.message))
        
    isTech.current = false;

   }, [newTech])
  
  //"delete" 
  useEffect(() => {
    
    if (!isDelete.current) return;

    const sendToken = prevToken.current.token;

    axios
    .delete(`http://localhost:5000/api/list/${deleteID}`, 
      { headers: {
        'x-auth-token': sendToken
        }
      }
    )
    .then(res => res.data)
    .catch(error => console.log(error.message))
    
    isDelete.current = false;

   }, [deleteID]);

  //"put" USE EFFECT
  useEffect(() => {

    if (!isPut.current) return;

    const sendToken = prevToken.current.token;

    axios
    .put(`http://localhost:5000/api/list/${putObj.id}`,
      {
        title: putObj.title,
        note: putObj.note
        }, 
      { headers: {
          'x-auth-token': sendToken
          }
      }
    )
    .then(res => fetchAll(sendToken))
    .catch(error => console.log(error.message))

    isPut.current = false;
   }, [putObj])

  return (
    <div>
      <h2 className='f2 light-green'>{name}'s Roll-a-Dex</h2>
      <NewTech addTech={addTech} name={name} />
      <Scroll>
        <TechList 
          list={list}
          deleteTech={deleteTech}
          editTech={editTech} 
        />
      </Scroll> 
    </div>
  );
};

export default Main