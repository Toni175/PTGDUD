import React from 'react'
import '../cssFile/Card.css'

function Card(props) {
  return (
    <>
   <div class='container'>
    <div class='img'>
       <img src={props.img} alt="" />
    </div>
    <div class='name_price'>
    <span class='name'>{props.name}</span>
    <span class='price'>{props.price}</span>
    </div>
    <div class='button'>
        <button>Add to Card</button>
    </div>
   </div>
    
    </>
  )
}

export default Card