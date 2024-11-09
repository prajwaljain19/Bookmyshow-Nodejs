import React from 'react'
import { seats } from '../data'
import "../CSS/Home.css"

const Lastbooking = () => {
  return (
    <div>
       <h1>Last Booking details</h1>

       <h1 className='seat_d'>seats:</h1>
       <div className='btn_button'>
        {seats.map((el,index) => (
          <li className='seat_value' key={index}>
            (seat) : 0
          </li>
        ))}
       </div>
       <p className='slot' style={{textAlign: "left"}}>Slot: 00:00 </p>
       <p className='movie'>Movie: <span>Tenet</span></p> 
    </div> 
  )
}

export default Lastbooking
