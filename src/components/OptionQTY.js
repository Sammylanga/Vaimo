import {React, useState } from 'react';
import minus from './Icons/minus_icon.png';
import plus from './Icons/plus_icon.png';
export default function OptionQTY(props) {
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
    <div>
        <label className="options">
       
            {Object.keys(props.options).map( key =>(
               
                <><label key={key} className="container">
                    <label className="label">{props.options[key].label}</label>
                    <label className="buyP">{props.options[key].price.currency.symbol} {props.options[key].price.value}</label>
                
                <div className="btn_container">
                    <button className="minus_btn" onClick={decrease}> <img src={minus} className="minus" alt="minus" /></button>
                    <button className="show">{counter}</button>
                    <button className="plus_btn" onClick={increase}><img src={plus} className="plus" alt="minus" /></button>
                    </div>
                    </label> </>

            ))}
        
      </label>
    </div>
  );
}


