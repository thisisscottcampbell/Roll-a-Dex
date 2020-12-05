import React from 'react';
import inputHook from '../../hooks/inputHook';

const TechForm = ({ updateTech }) => {

  const [titleValue, handleTitleChange, titleReset] = inputHook('');
  const [noteValue, handleNoteChange, noteReset] = inputHook('');

  const formSubmit = e => {
    e.preventDefault();

    updateTech({
      title: titleValue, 
      date: new Date().toString().slice(0, 15), 
      note: noteValue
    });

    const resetAll = () => {
      titleReset();
      noteReset();
    }
    resetAll()
  }

  return (
      <>
      <form onSubmit={formSubmit}>
        <input
          type='text'
          value={titleValue} 
          onChange={handleTitleChange}
          placeholder='technique name' 
        />
          <input
          type='text'
          value={noteValue} 
          onChange={handleNoteChange}
          placeholder='notes' 
        />
      </form>
      <div>
        {titleValue}
        {noteValue}
      </div>
      </>
  );
};

export default TechForm;