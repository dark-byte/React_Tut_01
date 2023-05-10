import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import JobInfo from './JobInfo'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
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
    <section className='jobs-center'>
      {/* Something */}
      {/* Something else */}
      <JobInfo jobs ={jobs}/>
    </section>
  )
}

export default App