import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Title from './Title';

function App() {

  const [menuItems, setMenuItems] = useState(items)
  const filter = (category)=>{
    const newMenu = menuItems.filter((item)=>{
      return item.category !=category
    })
    setMenuItems(newMenu)
  }

  return (<main>
    <section className='menu'>
      <Title text = "Our Menu"/>
      <Categories filter = {filter}/>
      <Menu items = {menuItems}/>
    </section>
  </main>)
}

export default App;