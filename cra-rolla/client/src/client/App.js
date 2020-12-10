import React, { useState, useEffect } from 'react';
import SignIn from './components/Main/SignIn';
import SignUp from './components/Main/SignUp';
import Main from './components/Main/Main';
import './App.css';

const App = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('')
 
  const submitUser = (name, password) => {

    setName(name);
    setPassword(password)
  };


  return (
    <div className='App tc'>
      {
        password ?
          <Main name={name} password={password} />
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
