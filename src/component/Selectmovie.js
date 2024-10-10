import React from "react";
import { movieslist } from "../data";
import Radiocomponent from "./Radiocomponent";
import '../CSS/SelectMovie.css'

const selectmovies = () => {
  return (
    <>
      <h1 className="SM_heading">Select A Movie: </h1>
      <div className="SM_main_container">
        {movieslist.map((element, index) => (
          <Radiocomponent text={element.Title} key={index} />
        ))}
      </div>
    </>
  );
};

export default selectmovies;
