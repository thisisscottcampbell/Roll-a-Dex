import React, { useState } from 'react';
import SignIn from './components/Main/SignIn';
import SignUp from './components/Main/SignUp';
import Main from './components/Main/Main';
import axios from 'axios'
import './App.css';

const App = () => {

  const [name, setName] = useState(() => '');
  const [password, setPassword] = useState(() => '')
  const [token, setToken] = useState(() => '')
 
  const submitUser = (name, password) => {

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
  };

  return (
    <div className='App tc'>
      {
        token ?
          <Main name={name} password={password} token={token} />
          :
          <> 
            <SignIn submitUser={submitUser} />
            <SignUp submitUser={submitUser} />
          </>
      }
    </div>
  )

}

export default App;
