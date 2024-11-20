import React from 'react'

const SeatInput = ({text,key,changeselection,Noofseat,changeNoofseat}) => {

  const handleChange = (val) => {
    changeselection(val);
  }
  const change_seat = (e) => {
    changeNoofseat({...Noofseat,[e.target.name]:Number(e.target.value)})

    window.localStorage.setItem("seats",
      JSON.stringify({
        ...Noofseat,[e.target.name]:Number(e.target.value)
      })
    )
  }
  return (
    <div className='form-check'>
      <span className=''>{text} </span>
      <input type='number' className='seat_input' placeholder='0' max={30} min={0} 
      name={text} onClick={() => handleChange(text)} onChange={change_seat} value={Noofseat[text]}/>
    </div>
  )
}

export default SeatInput
