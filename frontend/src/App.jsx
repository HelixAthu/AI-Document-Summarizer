import React from 'react'
import './App.css'
import ActionButton from './components/ActionButton.jsx'
import AnimatedGradient from './components/AnimatedGradient.jsx'

const App = () => {
  return (
    <div id="wrapper">
      <AnimatedGradient 
        topLeft="45%"
        topRight="90%"
        bottomLeft="52%"
        bottomRight="66%"
        duration={4000}
        color="purple"
        height="40dvw"
        width="40dvw"
      />
      <AnimatedGradient 
        topLeft="100%"
        topRight="10%"
        bottomLeft="10%"
        bottomRight="100%"
        duration={8000}
        color="limegreen"
        height="30dvw"
        width="30dvw"
      />
      <h1>Briefme.Ai</h1>
      <p>AI Research Paper Summarizer</p>
      <section className="mainLayout">
        <input type="file" accept="application/pdf"/>
        <div className="aiSummary">Your summary will appear here...</div>
      </section>
      <ActionButton name="Summarize✨" handleFunc={Summarize}/>
    </div>
  )
}


function Summarize() {
  console.log("Summarize button clicked!")
}

export default App