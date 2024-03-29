import React from 'react';

const Question = ({title, info}) => {
  return (
    <article className='question'> 
        <header>
            <h4>{title}</h4>
            <button className='btn'>btn</button>
        </header>
    </article>
    );
};

export default Question;