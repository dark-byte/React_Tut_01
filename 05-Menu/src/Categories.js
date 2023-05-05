import React from 'react';

const Categories = ({categories, filter}) => {

  return (
    <div className="btn-container">
      {categories.map((category)=>{
        return <button onClick={()=> filter(category)} className='filter-btn'>{category}</button>
      })}
    </div>
  );
};

export default Categories;