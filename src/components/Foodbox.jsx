import React from 'react';

function Foodbox(props) {

    const { name, image, calories, quantity } = props.foodProps
  return (
    <div >

    <img width="50px" src={image} alt="img" />
    <h2>{name}</h2>
    <p>{calories}</p>
    <p>{quantity}</p>

    </div>
  )
}

export default Foodbox;