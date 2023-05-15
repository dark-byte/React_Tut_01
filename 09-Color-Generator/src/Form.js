import React, { useState } from 'react';

const Form = () => {

    const [color, setColor] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <section className='container'>
      <h3>Color Generator</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <input 
            type="text"
            value={color}
            placeholder='#f15025'
            onChange={(e)=>{setColor(e.target.value)}}/>    
        
        <input 
            type='color'
            value = {color}
            onChange={(e)=>{setColor(e.target.value)}}></input>
        
        <button 
            className='btn'
            onClick={handleSubmit} 
            style={{background : color}}>Submit</button>
      </form>
    </section>
  );
}

export default Form;
