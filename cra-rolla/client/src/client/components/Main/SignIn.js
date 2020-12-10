import React from 'react';
import inputHook from '../../hooks/inputHook';

const SignIn = ({ submitUser }) => {
  
  const [userInput, updateUserValue, resetUser] = inputHook('');
  const [pwInput, updatePwValue, resetPw] = inputHook('');

  const handleSubmit = e => {
    e.preventDefault();

    submitUser(userInput, pwInput);

    resetUser();
    resetPw();
  }

  return (
    <div className='pa2'>
      <h1 className='f1 b'>Sign in</h1>
        <input 
          type='text'
          value={userInput} 
          onChange={updateUserValue}
          placeholder="your name"
          className='pa3 ba b--green bg-lightest-blue'
        />
        <input 
          type='text'
          value={pwInput} 
          onChange={updatePwValue}
          placeholder="password"
          className='pa3 ba b--green bg-lightest-blue'
        />
      <button onClick={handleSubmit}>submit</button>
      <div className='pa2'>
        <h1>OR</h1>
      </div>
    </div>
  );
};

export default SignIn;