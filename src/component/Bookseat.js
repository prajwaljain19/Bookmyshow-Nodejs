import React from "react";
import { seats } from "../data";
import SeatInput from "../component/SeatInput"
import '../CSS/SeatInput.css'

const Bookseat = () => {
  return (
    <>
      <h1 className='Book_heading'>Select Seats: </h1>
      <div className="Book_seat">
        {seats.map((el, index) => {
          return <SeatInput text={el} key={index} />;
        })}
      </div>
    </>
  );
};

export default Bookseat;
