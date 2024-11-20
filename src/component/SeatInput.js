import React from 'react'

const SeatInput = ({text,key,changeselection }) => {

  const handleChange = (val) => {
    changeselection(val);
  }
  return (
    <div className='form-check'>
      <span className=''>{text} </span>
      <input type='number' className='seat_input' placeholder='0' max={30} min={0} onClick={() => handleChange(text)} />
    </div>
  )
}

export default SeatInput
