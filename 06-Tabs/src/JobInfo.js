import React from 'react';
import Duties from './Duties';

const JobInfo = ({jobs}) => {

    const {company, dates, duties, title} = jobs[0]

  return (
    <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        <Duties duties = {duties}/>
    </article>
  );
}

export default JobInfo;