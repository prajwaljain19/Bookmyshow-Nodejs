import React from 'react'

const SeatInput = ({text, key}) => {
  return (
    <div className='form-check'>
      <span className=''>{text}</span>
      <input type='number' className='seat_input' placeholder='0' max={30} min={0} />
    </div>
  )
}

export default SeatInput
