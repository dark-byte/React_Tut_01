import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    var amount = parseInt(count)
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring Lorem Ipsum Texts?</h3>
      <form className='lorem-form'>
        <label htmlFor='amount'>Number of Paragraphs</label>
        <input 
        type="number" 
        name='amount' 
        id='amount'
        min="1"
        step="1"
        max= "8"
        value={count}
        onChange={(e)=>{
          setCount(e.target.value)
        }}
        />
        <button className='btn' onClick={handleSubmit}>Submit</button>
      </form>
      <article className='result'>
        {text.map((txt, index)=>{
          return <p key={index}>{txt}</p>
        })}
      </article>
    </section>
    )
}

export default App;
