import { useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
    const [movie, changemovie] = useState('');
    const [Time, changeTime] = useState('');
    const [Noofseat, changeNoofseat] = useState({
        A1:"",
        A2:"",
        A3:"",
        A4:"",
        D1:"",
        D2:"",
    });

    const [lastbookingdetails,setlastbookingdeatails] = useState(null);
    return (
        <BsContext.Provider value={{movie,changemovie,Time,changeTime,Noofseat,changeNoofseat,lastbookingdetails}}>{props.children}</BsContext.Provider>
    )
} 

export default BsState ;