import React, { useEffect, useState } from 'react';
import people from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
    const [currIndex, setCurrIndex] = useState(0)
    const next = ()=>{
        setCurrIndex((currIndex+1) % people.length)
    }
    const prev = ()=>{
        setCurrIndex((currIndex - 1 + people.length) % people.length)
    }

    useEffect(()=>{
        let sliderId = setInterval(() => {
                next()
            }, 2000)
        return ()=>{
            clearInterval(sliderId)
        }
    },[currIndex])

  return (
    <div className='section-center'>
        {people.map((person, index)=>{
            const {id, image, name, title, quote} = person
            return(
                <article key ={id}
                style={{
                        transform: `translateX(${100 * (index - currIndex)}%)`, 
                        opacity: `${index === currIndex? 1: 0}`,
                        visibility: `${index === currIndex? 'visible' : 'hidden'}`
                    }
                }>
                <img className='person-img' src={image} alt={name} />
                    <h4>{name}</h4>
                    <p className='title'>{title}</p>
                    <p className='text'>{quote}</p>
                    <FaQuoteRight className='icon'/>
                </article>
            )
        })}
        <button onClick={prev} className='prev'>
            <FiChevronLeft/>
        </button>
        <button onClick={next} className='next'>
            <FiChevronRight/>
        </button>
    </div>
  );
}

export default Carousel;
