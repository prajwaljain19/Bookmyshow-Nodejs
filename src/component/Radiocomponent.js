import React from 'react'
import '../CSS/Radiocomponent.css'

const Radiocomponent = ({text,data,changeSelection}) => {

  const hadlecheaked =(val) => {
    changeSelection(val)
  }
  return (
    <div name={text} className={`form-check-label ${data === text ? "active" : "inactive"}`} onClick={() => {hadlecheaked(text)}}>
      <span className='text'>{text} </span>
    </div>
  )
}

export default Radiocomponent
