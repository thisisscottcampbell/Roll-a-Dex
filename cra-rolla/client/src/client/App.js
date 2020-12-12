import React, { useState } from 'react';
import SignIn from './components/Main/SignIn';
import SignUp from './components/Main/SignUp';
import Main from './components/Main/Main';
import axios from 'axios'
import './App.css';

const App = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [onlySignIn, setSignIn] = useState(false)
 
  const submitUser = (name, password, bool) => {

    const userObj = {
      name: name,
      password: password
    };

    setName(name);
    setPassword(password);

    axios.post('http://localhost:5000/api/auth', userObj)
      .then(res => {
        setToken(res.data);
      })
      .catch(error => console.log(error))
    
    setSignIn(bool);
  };

  if (onlySignIn) return (
    <div className='App tc'>
      <SignIn submitUser={submitUser} />
    </div>
  )

  if (token) return (
    <div className='App tc'>
      <Main 
        name={name} 
        password={password} 
        token={token} 
      /> 
    </div>
  )

  return (
    <div className='App tc'> 
      <SignIn submitUser={submitUser} />
      <SignUp submitUser={submitUser} />
    </div>
  )
}

export default App;
