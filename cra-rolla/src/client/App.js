import React, { useState } from 'react';
import UserForm from './components/UserForm';
import Main from './components/Main';
import './App.css';

const App = () => {

  const [userName, setUserName] = useState('');

  const submitUser = (name) => setUserName(name);
  
  return !userName ? 
  <UserForm submitUser={submitUser} /> : <Main userName={userName} />

}

export default App;
