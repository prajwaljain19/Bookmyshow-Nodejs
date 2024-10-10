import React from 'react'
import '../CSS/Radiocomponent.css'

const Radiocomponent = ({text, key}) => {
  return (
    <div className='form-check-label'>
      <span className='text'>{text} </span>
    </div>
  )
}

export default Radiocomponent
