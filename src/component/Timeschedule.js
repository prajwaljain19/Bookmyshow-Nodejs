import React from 'react'
import {slot} from '../data.js'
import Radiocomponent from './Radiocomponent'

const Timeschedule = () => {
  return (
    <div className='Slot_container'>
       <h1 className='TS_heading'>Select Time:</h1>
      <div className='TS_main_container'>
        {slot.map((el,index) => {
          return (
          <Radiocomponent text={el} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default Timeschedule
