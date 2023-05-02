import React, { useState } from 'react';
import Review from './Review';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

import reviews from './data'

function App() {

  const [index, setIndex] = useState(0);
  const {id, name, job, image, text} = reviews[index]

  const getNextPerson = () =>{
    setIndex((oldIndex)=>{
      const newIndex = (oldIndex+1) % reviews.length 
      return (newIndex)
    })
  }

  const getPrevPerson = () =>{
    setIndex((oldIndex)=>{
      const newIndex = oldIndex === 0 ? reviews.length - 1 : oldIndex -1
      return(newIndex)
    })
  }

  const getRandPerson = () =>{
    setIndex(Math.floor(Math.random() * reviews.length))
  }

  return (<main>
    <article className='review container'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>

      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      
      <div className="btn-container">
        <button className='prev-btn' onClick={getPrevPerson}>
          <FaChevronLeft/>
        </button>

        <button className='next-btn' onClick={getNextPerson}>
          <FaChevronRight/>
        </button>
      </div>

      <button className='btn random-btn' onClick={getRandPerson}>Surprise Me</button>

    </article>
  </main>)
}

export default App;
