import React,{ useState, useEffect, useRef } from 'react';
import NewTech from '../NewTech/NewTech';
import TechList from '../TechList/TechList';
import Scroll from '../TechList/Scroll';
import axios from 'axios';

const Main = ({ name, password, token }) => {
  
  const prevToken = useRef(token);

    //INIT STATE
  const [list, setList] = useState([])//needs to be user list;
  const [newTech, setTech] = useState({})
  const [deleteID, setDeleteID] = useState('');
  const [putObj, setPutObj] = useState({})
  
    //STATE FUNCTIONS
  //add tech
  const addTech = tech => setTech(tech);
  //delete tech
  const deleteTech = id => {
    let idx;

    list.forEach((tech, i) => {
      if (id === tech._id) idx = i
    })

    list.splice(idx, 1);

    console.log(list);

    setDeleteID(id);
    setList([...list])
  };
  //put tech
  const editTech = (putObj) => setPutObj(putObj);

  const fetchAll = (token) => {
    axios.get('http://localhost:5000/api/list', {
      headers: {
        'x-auth-token': token
      }
     })
      .then(res => {
        setList(res.data);
      })
      .catch(error => console.log(error.message));
  }
  
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
        setList(res.data);
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
        
        setTech({})
   }, [newTech])
  
   //"delete" USE EFFECT
   useEffect(() => {
    
      if (!deleteID) return;
     console.log('run delete');

      const sendToken = prevToken.current.token;

      axios.delete(`http://localhost:5000/api/list/${deleteID}`, 
          { headers: {
            'x-auth-token': sendToken
          }
      })
        .then(res => res.data)
        .catch(error => console.log(error.message))

   }, [deleteID]);

   //"put" USE EFFECT
   useEffect(() => {

    if (!putObj.title || !putObj.note) return;
    console.log('run put');

    const sendToken = prevToken.current.token;

    //console.log(putObj)
    // const [title, ]

    axios.put(`http://localhost:5000/api/list/${putObj.id}`,
        {
          title: putObj.title,
          note: putObj.note
        }, 
        { headers: {
          'x-auth-token': sendToken
        }
    })
      .then(res => fetchAll(sendToken))
      .catch(error => console.log(error.message))

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