import React from 'react';
import axios from 'axios';
import inputHook from '../../hooks/inputHook';

const SignUp = ({ submitUser }) => {
  
  const [userInput, updateUserValue, resetUser] = inputHook('');
  const [pwInput, updatePwValue, resetPw] = inputHook('');

  const handleSubmit = e => {
    e.preventDefault();

    const userObj = {
      name: userInput,
      password: pwInput
    };

    axios.post('http://localhost:5000/api/register', userObj)
     .then(res => console.log(res.data))
     .catch(error => console.log(error))
     .then(submitUser(userInput, pwInput, true))

     resetUser();
     resetPw();
    }
  
  return (
    <div className='pa2'>
      <h1 className='f1 b'>Sign Up</h1> 
        <input 
          type='text'
          value={userInput} 
          onChange={updateUserValue}
          placeholder="your name"
          className='pa3 ba b--green bg-lightest-blue'
        />
        <input 
          type='password'
          value={pwInput} 
          onChange={updatePwValue}
          placeholder="password"
          className='pa3 ba b--green bg-lightest-blue'
        />
        <button 
          onClick={handleSubmit}
          className="f4 bg-washed-blue grow no-underline br-pill ba ph3 pv2 mb2 dib dark-blue"
          style={{marginTop: '1.5em'}}
        >submit</button> 
    </div>
  );
};

export default SignUp
