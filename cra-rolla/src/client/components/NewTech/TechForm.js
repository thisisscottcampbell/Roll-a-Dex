import React from 'react';
import inputHook from '../../hooks/inputHook';
import { uuid } from 'uuidv4';

const TechForm = ({ updateTech }) => {

  const [titleValue, handleTitleChange, titleReset] = inputHook('');
  const [noteValue, handleNoteChange, noteReset] = inputHook('');

  const resetAll = () => {
    titleReset();
    noteReset();
  }

  const handleClick = e => {
    e.preventDefault();

    console.log(uuid());

    updateTech({
      id: uuid(),
      title: titleValue, 
      date: new Date().toString().slice(0, 15), 
      note: noteValue
    });
    
    resetAll()
  }

  return (
      <>
      <form>
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
      <button onClick={handleClick}>Add Technique</button>
      <div>
        {titleValue}
        {noteValue}
      </div>
      </>
  );
};

export default TechForm;