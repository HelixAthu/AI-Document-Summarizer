import React from 'react'
import '../App.css'

const ActionButton = (props) => {
  return (
    <button className="summarizeBtn" onClick={props.handleFunc} disabled={props.disabled}>
      {props.name}
    </button>
  )
}

export default ActionButton