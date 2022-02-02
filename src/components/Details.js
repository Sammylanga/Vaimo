import { React, useState } from 'react';
import ok from './Icons/ok_icon.png';
import star from './Icons/fullstar.png';
import logo from './Icons/logo.png';
import forward from './Icons/forward_icon.png';
import apple from './Icons/apple_icon.svg';
import visa from './Icons/visa_icon.svg';
import mastercard from './Icons/mastercard_icon.svg';
import lock from './Icons/lock_icon.svg'
import time from './Icons/time_icon.png';
import QTY from './OptionQTY';
import "@fontsource/roboto";
import Dtimer from './Count';

/* */
const Details = (props) => {

  return (
    <div className="infoBoxMain">   
        <div className="infoBox">
      <p className="Stock1">Ready to Ship</p>
      <p className="Stock2"><img src={ok} className="okIcon" alt="OK icon" />In Stock</p>
      <p className="Stock3"><img src={ok} className="okIcon" alt="OK icon" />Fast Dispatch</p>
      </div>

        <div className="productName">
          <p className="pName">{props.products.name}<label className="tags">{props.products.tags[0]}</label></p> 
      </div>

        <div className="ratings">
        <p className="stars">
            <img src={star} className="starIcon" alt="star" />
            <img src={star} className="starIcon" alt="star" />
            <img src={star} className="starIcon" alt="star" />
            <img src={star} className="starIcon" alt="star" />
            <img src={star} className="starIcon" alt="star" />
        </p>
        <p className="rate">{props.products.reviews.rating}</p>
        <p className="count">{props.products.reviews.count} Reviews</p>
        <p className="total_buyers">{props.products.reviews.total_buyers} buyers</p>
            </div>
    
    <div className="options_1">
        <div className="new_price">
            <div className="newPrice">
            <p className="battery"key={"battery_accessories"}>R {props.products.options["battery_accessories"].price.value.toFixed(2)} </p>
            <p className='K_' key={"4k"}> - R {props.products.options["4k"].price.value.toFixed(2)}</p></div>
            <p className="opt">/Option</p>
            <p className='opt_2'>2 Options</p>
            <p className='minorder'>(Min.Order)</p>
            </div>
        <div className="old_price">
            <p className="battery" key={"battery_accessories"}>R {props.products.options["battery_accessories"].old_price.value.toFixed(2)} - </p>
            <p className="K_"key={"4k"}> R {props.products.options["4k"].old_price.value.toFixed(2)}</p>
            </div>

        </div>
    <div className="deliver">
        <img src={logo} className="logo" alt="logo" />
        <li className="deliverShip">Free shipping (up to $40%)</li>
        <li className="deliverShip2">On time delivery guaranteed</li>
        <img src={forward} className="forward" alt="logo" />
        </div> 
    <div className="Discount">
        <p className="Perc">{props.products.discount.amount} OFF </p>
        <p className="ends">Discount ends in</p>
        <img src={time} className="time" alt="logo" />
        <p className="counter"><Dtimer timer={props.products.discount.end_date}></Dtimer></p>

        </div> 
    
    {Object.keys(props.products.options).map(key =>(
    <QTY key={key} options={props.products.options[key]}>
        if()
    </QTY>))}
         
    <div className="Assurance">
        <img className="lock"src={lock} alt='apple'></img>
        <p className='Trade'>Trade Assurance</p>
        <p className='protect'>protects your alibaba.com orders</p>
        </div>
    <div className="pOpts">
        <p className='payments'>Paymets: </p>
        <img className='visa' src={visa} alt="visa"></img>
        <img className='master' src={mastercard} alt="mastercard"></img>
        <img className='apple' src={apple} alt="apple"></img>
        </div>
    <div className="solutions">
        <p className="sol1">Alibaba.com Logistics</p>
        <p className="sol1">Inspection Solutions</p>
        </div>
    </div>
  )
}

export default Details
