import React from 'react';
import inputHook from '../../hooks/inputHook';

const UserForm = ({ submitUser }) => {
  
  const [input, updateValue, reset] = inputHook('');

  const handleSubmit = e => {
    e.preventDefault();

    submitUser(input);
    reset();
  }

  return (
    <div className='pa2'>
      <h1 className='f1 b'>Sign in</h1> 
      <form onSubmit={handleSubmit}>  
        <input 
          type='text'
          value={input} 
          onChange={updateValue}
          className='pa3 ba b--green bg-lightest-blue'
        />
      </form> 
    </div>
  );
};

export default UserForm;