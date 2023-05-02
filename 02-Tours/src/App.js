import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !=id);
    setTours(newTours);
  }

  const fetchTours= async()=>{
    setIsLoading(true);
    try{
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      setIsLoading(false)

    } catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchTours()
  }, [])

  if(isLoading){
    return <main>
      <Loading/>
    </main>
  }

  if(tours.length === 0){
    return (<main>
      <div className='title'>
        <h2>No Tours Left</h2>  
        <button type='button' className='btn btn-block' onClick={fetchTours}>Refesh</button>
      </div>
    </main>)
  }

  return <main>
    <Tours tours = {tours} removeTour = {removeTour}/>

  </main>
}

export default App
