import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  const [movie, changemovie] = useState("");
  const [Time, changeTime] = useState("");
  const [Noofseat, changeNoofseat] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });

  const [lastbookingdetails, setlastbookingdeatails] = useState(null);

  const handlePostbooking = async () => {
    const response = await fetch(`https://localhost:8080/api/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie: movie,
        slot: Time,
        seats: Noofseat,
      }),
    });
    const data = await response.json();
    console.log("response-----", data);

    if (response.status === 200) {
      changeTime("");
      changemovie("");

      setlastbookingdeatails(data.data);

      window.localStorage.clear();
    }
  };

  const handleGetBooking = async() {
    const response = await fetch(`https://localhost:8080/api/booking`, {
        method: "GET",
    });
    const data = await response.json();
    console.log("handleGetBooking------",data);
    setlastbookingdeatails(data.data);
  }

  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if(movie) {
        changemovie(movie);
    }
    if(slot) {
        changeTime(slot);
    }
    if(seats) {
        changeNoofseat(seats);
    } 
  })
  return (
    <BsContext.Provider
      value={{
        movie,
        changemovie,
        Time,
        changeTime,
        Noofseat,
        changeNoofseat,
        lastbookingdetails,
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
