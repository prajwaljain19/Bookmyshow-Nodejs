import React, { useState } from "react";
import { seats } from "../data";
import SeatInput from "../component/SeatInput"
import '../CSS/SeatInput.css'

const Bookseat = () => {

  const [seat , setseat] = useState(null);

  const handlechange = (val) => {
    setseat(val);

    window.localStorage.setItem("seat",val);
  }
  return (
    <>
      <h1 className='Book_heading'>Select Seats: </h1>
      <div className="Book_seat">
        {seats.map((el, index) => {
          return <SeatInput text={el} key={index} changeselection={handlechange} />;
        })}
      </div>
     
    </>
  );
};

export default Bookseat;
