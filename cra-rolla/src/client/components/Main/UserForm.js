import React from 'react';
import InputHook from '../../hooks/InputHook';

const UserForm = ({ submitUser }) => {
  
  const [input, updateValue, reset] = InputHook('');

  const handleSubmit = e => {
    e.preventDefault();

    submitUser(input);
    reset();
  }

  return (
    <div>
      <h1>Sign in</h1> 
      <form onSubmit={handleSubmit}>  
        <input 
          type='text'
          value={input} 
          onChange={updateValue}
        />
      </form> 
    </div>
  );
};

export default UserForm;