import React from 'react';

const Categories = ({filter}) => {

  return (
    <div className="btn-container">
      <button onClick={filter} className='filter-btn'>All</button>
      <button onClick={filter} className='filter-btn'>Breakfast</button>
      <button onClick={filter} className='filter-btn'>Lunch</button>
      <button onClick={filter} className='filter-btn'>Shakes</button>
    </div>
  );
};

export default Categories;
