import React, { useContext } from "react";
import { slot } from "../data.js";
import Radiocomponent from "./Radiocomponent";
import BsContext from "../Context/BsContext.js";

const Timeschedule = () => {
  const context = useContext(BsContext);

  const { Time, changeTime } = context;

  const handlechangeItem = (val) => {
    changeTime(val);

    window.localStorage.setItem("slot", val);
  };

  return (
    <div className="Slot_container">
      <h1 className="TS_heading">Select a Schedule:</h1>
      <div className="TS_main_container">
        {slot.map((el, index) => {
          return (
            <Radiocomponent
              text={el}
              key={index}
              changeSelection={handlechangeItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Timeschedule;
