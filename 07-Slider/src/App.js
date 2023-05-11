import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
function App() {
  return(
    <main className='section'>
      <div className="title">
        <h2><span>/</span> Reviews</h2>
      </div>
        <Carousel/>
    </main>
  )
}

export default App;
