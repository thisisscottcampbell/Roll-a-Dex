import React, { useState } from 'react';
import UserForm from './components/Main/UserForm';
import Main from './components/Main/Main';
import './App.css';

const App = () => {

  const [userName, setUserName] = useState('');

  const submitUser = name => setUserName(name);
  
  return !userName ? 
  <UserForm submitUser={submitUser} /> : <Main userName={userName} />

}

export default App;
