import './App.css'
import ActionButton from './components/ActionButton.jsx'
import AnimatedGradient from './components/AnimatedGradient.jsx'
import React, {useState} from 'react'
import axios from 'axios'

const App = () => {
  const [file, setFile] = useState(null)
  const [summary, setSummary] = useState("Your summary will appear here...")
  const [loading, setLoading] = useState(false)

  async function Summarize() 
  {
    if (!file)
    {
      alert("Please select a PDF file")
      return
    }

    setLoading(true)

    const formData = new FormData()
    formData.append("pdf", file)

    try
    {
      const res = await axios.post("http://localhost:5000/summarize", formData, {
        headers: {"Content-Type": "multipart/form-data"}
      })
      setSummary(res.data.summary)
    }
    catch(e)
    {
      setSummary("Error: " + e.message)
    }

    setLoading(false)
  }
  
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
        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}/>
        <div className="aiSummary">{summary}</div>
      </section>
      <ActionButton name="Summarize✨" handleFunc={Summarize} disabled={loading}/>
    </div>
  )
}

export default App