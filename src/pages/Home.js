import React from "react";
import Selectmovie from "../component/Selectmovie";
import Lastbooking from "../component/Lastbooking";
import Timeschedule from "../component/Timeschedule";
import Bookseat from "../component/Bookseat";

const Home = () => {
  return (
    <div>
      <div className="Wrapper">
        <div className="select_movie_component">
          <Selectmovie />
        </div>
        <div className="last_booking_details_container">
            <Lastbooking/>
            </div>
      </div>

      <div className="time_seats_container">
         <Timeschedule/>
         <Bookseat/>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Home;
