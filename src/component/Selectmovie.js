import React, { useContext } from "react";
import { movieslist } from "../data";
import BsContext from "../Context/BsContext";
import Radiocomponent from "./Radiocomponent";
import '../CSS/SelectMovie.css'

const Selectmovies = () => {

  const context = useContext(BsContext);

  const {movie, changemovie} = context;

  const handleChangeMovie = (val) => {
    changemovie(val);
console.log("prajwal------------",val)
  window.localStorage.setItem("movie", val);
  
  }
  return (
    <>
      <h1 className="SM_heading">Select A Movie: </h1>
      <div className="SM_main_container">
        {movieslist.map((element, index) => (
          <Radiocomponent text={element.Title} key={index} data={movie} changeSelection={handleChangeMovie}/>
        ))}
      </div>
    </>
  );
};

export default Selectmovies;
