import React from 'react';
import inputHook from '../../hooks/inputHook';

const TechForm = ({ updateTech }) => {
  const [idValue, handleIdChange, idReset] = inputHook('');
  const [titleValue, handleTitleChange, titleReset] = inputHook('');
  const [dateValue, handleDateChange, dateReset] = inputHook('');

  const formSubmit = e => {
    e.preventDefault();

    updateTech({});

    const resetAll = () => {
      idReset();
      titleReset();
      dateReset();
    }
    resetAll()
  }

  return (
      <>
      <form onSubmit={formSubmit}>
        <input
          type='text'
          value={idValue} 
          onChange={handleIdChange} 
        />
        <input
          type='text'
          value={titleValue} 
          onChange={handleTitleChange} 
        />
        <input
          type='text'
          value={dateValue} 
          onChange={handleDateChange} 
        />
      </form>
      <div>
        {idValue}
        {titleValue}
        {dateValue}
      </div>
      </>
  );
};

export default TechForm;