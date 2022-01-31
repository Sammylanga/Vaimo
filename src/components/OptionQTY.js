import {React, useState } from 'react'
import minus from './Icons/minus_icon.png'

export default function OptionQTY() {
    const [counter, setCounter] = useState(0);
 
    //increase counter
    const increase = () => {
      setCounter(count => count + 1);
    };
    //decrease counter
    const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };
    return (
    <div className="btn_container">
        
        <button className="minus_btn" onClick={decrease}> <img src={minus} className="minus" alt="minus" /></button>
        <button className="show">{counter}</button>
        <button className="plus_btn" onClick={increase}>+</button>
      </div>
  );
}


