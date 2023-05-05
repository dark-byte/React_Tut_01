import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Title from './Title';

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]

function App() {

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filter = (category)=>{
    var newMenu = null
    newMenu = items.filter((item)=>{
      return item.category === category
    })
    if(category === 'all') newMenu = items

    setMenuItems(newMenu)
  }

  return (<main>
    <section className='menu'>
      <Title text = "Our Menu"/>
      <Categories categories = {categories} filter = {filter}/>
      <Menu items = {menuItems}/>
    </section>
  </main>)
}

export default App;