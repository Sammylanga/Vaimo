import React from 'react'

const Header = (props) => {
  /*for displaying the image of the products */
  return (
    <div className="itemI">
      <img className="ItemImg" src={props.img}></img>
    </div>
  )
}

export default Header
