import React, { useState } from 'react';
import SignIn from './components/Main/SignIn';
import Main from './components/Main/Main';
import './App.css';

const App = () => {

  const [userName, setUserName] = useState('');

  const submitUser = name => setUserName(name);
  
  return (
    <div className='App tc'>
      {
        !userName ? 
          <SignIn submitUser={submitUser} /> : 
          <Main userName={userName} />
      }
    </div>
  )

}

export default App;
