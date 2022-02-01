import {React, useState } from 'react';
import minus from './Icons/minus_icon.png';
import plus from './Icons/plus_icon.png';


export default function OptionQTY(props) {
    //store counter
    const [counter, setCounter] = useState(0);
    
    //store price
    const [price,setPrice] =useState(0);


    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setCounter(value);
        setPrice(props.options.price.value*(value));
      };

 
    //increase counter
    const increase = () => {
      setCounter(count => count - 1);
      setCounter(count => count + 2);
      if(counter+1 > 0){
        setPrice(props.options.price.value*(counter+1));}
    };
    //decrease counter
    const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
      setPrice(props.options.price.value*(counter-1));
    }
  };
    return (
    <div className="c_options">
                   <div className="container"> 
                    <p className="labl">{props.options.label}</p>
                    <p className="buyP">{props.options.price.currency.symbol} {price.toFixed(2)}</p>
                    </div>
                   <div className="btns"> 
                   <button className="minus_btn" onClick={decrease}> <img src={minus} className="minus" alt="minus" /></button>
                   <input className="show" value={counter} onChange={handleChange} />
                    <button className="plus_btn" onClick={increase}><img src={plus} className="plus" alt="minus" /></button>
                    </div>
    </div>
  );
}


