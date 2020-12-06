import React from 'react';
import inputHook from '../../hooks/inputHook';
import { uuid } from 'uuidv4';

const TechForm = ({ updateList }) => {

  const [titleValue, handleTitleChange, titleReset] = inputHook('');
  const [noteValue, handleNoteChange, noteReset] = inputHook('');

  const resetAll = () => {
    titleReset();
    noteReset();
  }

  const handleClick = e => {
    e.preventDefault();

    console.log(uuid());

    updateList({
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
          className='pa1 ba b--green bg-lightest-blue' 
        />
        <input
          type='text'
          value={noteValue} 
          onChange={handleNoteChange}
          placeholder='notes'
          className='pa1 ba b--green bg-lightest-blue' 
        />
      </form>
      <button 
        onClick={handleClick}
        className="f6 bg-washed-blue grow no-underline br-pill ba ph3 pv2 mb2 dib dark-blue"
        style={{marginTop: '1.5em'}}
      >Add Technique</button>
      <div>
        {titleValue}
        {noteValue}
      </div>
      </>
  );
};

export default TechForm;