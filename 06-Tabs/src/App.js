import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)
  
  const fetchJobs = async()=>{
    const res = await fetch(url)
    const newJobs = await res.json()
    setJobs(newJobs)
    setIsLoading(false)  
  }
  
  useEffect(()=>{
    fetchJobs()
  }, [])

  if(isLoading){
    return(
      <section className='jobs-center'>
        <div className="loading">
          <h3>Loading...</h3>
        </div>
      </section>
    )
  }

  return(
    <section className='section'>
      <div className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
        </div>
      <section className='jobs-center'>
        <BtnContainer jobs = {jobs} currentItem = {currentItem} setCurrentItem = {setCurrentItem}/>
        <JobInfo jobs ={jobs} currentItem = {currentItem}/>
      </section>

    </section>
  )
}

export default App