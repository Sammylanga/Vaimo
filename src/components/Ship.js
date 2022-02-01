import React from 'react';
import envelope from './Icons/envelope_icon.png';
import info from './Icons/info_icon.png';

const Ship = (props) => {
  return (
    <div className="shipTO">
      <div className="country">
        <p className="ship1"> <div className="shipPlace">Ship to <u>{props.ship.shipping.method.country} by <u className="by">{props.ship.shipping.method.title}</u></u> </div><div className="priceTag">R {(props.ship.shipping.method.cost.value).toFixed(2)}</div></p>
        <p className="ship2">Lead Time <label>{props.ship.shipping.lead_time.value}</label><img src={info} className="info1" alt="envelope" /></p>
        <p className="ship2">Shiping time <label>{props.ship.shipping.method.shipping_time.value}</label><img src={info} className="info1" alt="envelope" /></p>     
      </div>
      <button className="login"><label className="label1">Login to Purchase</label></button>
      <button className="contact"><img src={envelope} className="envelop" alt="envelope" /><label className="label2">Contact the Supplier</label></button>
    </div>
   
  )
}


export default Ship
