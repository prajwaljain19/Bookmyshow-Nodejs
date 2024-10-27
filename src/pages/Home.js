import React from "react";
import Selectmovie from "../component/Selectmovie";
import Lastbooking from "../component/Lastbooking";
import Timeschedule from "../component/Timeschedule";
import Bookseat from "../component/Bookseat";
import '../CSS/Home.css'

const Home = () => {
  return (
    <div className="container">
      <div className="Wrapper">
        <div className="select_movie_component">
          <Selectmovie />
        </div>
        <div className="last_booking">
            <Lastbooking/>
            </div>
      </div>

      <div className="time_seats_container">
         <Timeschedule/>
         <Bookseat/>
        <button className="BN-BTN">Book Now</button>
      </div>
    </div>
  );
};

export default Home;
