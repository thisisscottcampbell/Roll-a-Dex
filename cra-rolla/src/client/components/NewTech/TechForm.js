import React from 'react';
import inputHook from '../../hooks/inputHook';

const TechForm = ({ updateTech }) => {
  const [idValue, handleIdChange, idReset] = inputHook('');
  const [titleValue, handleTitleChange, titleReset] = inputHook('');
  const [dateValue, handleDateChange, dateReset] = inputHook('');
  const [noteValue, handleNoteChange, noteReset] = inputHook('');

  const formSubmit = e => {
    e.preventDefault();

    updateTech({});

    const resetAll = () => {
      idReset();
      titleReset();
      dateReset();
      noteReset();
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
          <input
          type='text'
          value={noteValue} 
          onChange={handleNoteChange} 
        />
      </form>
      <div>
        {idValue}
        {titleValue}
        {dateValue}
        {noteValue}
      </div>
      </>
  );
};

export default TechForm;