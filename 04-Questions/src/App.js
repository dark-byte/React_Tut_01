import React, { useState } from 'react';
import data from './data';
import Questions from './Question';
function App() {

  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleActiveId = (id)=>{
    const newId = id === activeId? null: id
    setActiveId(newId)
  }

  return <main>
    <div className="container">
      <h3>Questions</h3>
      <Questions questions = {questions} activeId = {activeId} toggleActiveId = {toggleActiveId}/>
    </div>

  </main>
}

export default App;
