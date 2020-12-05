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