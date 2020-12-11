import React from 'react';
import inputHook from '../../hooks/inputHook';
//import { uuid } from 'uuidv4';

const TechForm = ({ addTech, name }) => {

  const [titleValue, handleTitleChange, titleReset] = inputHook('');
  const [noteValue, handleNoteChange, noteReset] = inputHook('');

  const resetAll = () => {
    titleReset();
    noteReset();
  }

  const handleClick = e => {
    e.preventDefault();

    let currDate = new Date().toString().slice(0,15);

    addTech({
      title: titleValue, 
      date: currDate, 
      note: noteValue,
      name: name
    });
    
    resetAll()
  }

  return (
      <>
      <form>
        <input
          style={{width: '13rem'}}
          type='text'
          value={titleValue} 
          onChange={handleTitleChange}
          placeholder='technique name'
          className='pa1 ba b--light-blue bg-lightest-blue' 
        />
        <br/>
        <textarea
          style={{width: '13rem', height: '7rem'}}
          type='text'
          value={noteValue} 
          onChange={handleNoteChange}
          placeholder='notes'
          className='pa1 ba b--green bg-washed-green' 
        />
      </form>
      <button 
        onClick={handleClick}
        className="f6 bg-washed-blue grow no-underline br-pill ba ph3 pv2 mb2 dib dark-blue"
        style={{marginTop: '1.5em'}}
      >Add Technique</button>
      {/* <div>
        {titleValue}
        {noteValue}
      </div> */}
      </>
  );
};

export default TechForm;