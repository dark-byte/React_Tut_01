import React, { useState } from 'react';
import SingleQuestion from './SingleQuestion';
const Question = ({questions, toggleActiveId, activeId}) => {
  return <section>
    {questions.map((question)=>{
      return <SingleQuestion key = {question.id} {...question} activeId={activeId} toggleActiveId={toggleActiveId}/>
    })}
  </section>
};

export default Question;
