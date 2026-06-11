import React from 'react'
import './App.css'

const App = () => {
  return (
    <div id="wrapper">
      <h1>Briefme.Ai</h1>
      <p>Let's brief up those documents!</p>
      <section className="mainLayout">
        <input type="file" accept="application/pdf"/>
        <div className="aiSummary">lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </section>
      <button className="summarizeBtn">Summarize✨</button>
    </div>
  )
}

export default App