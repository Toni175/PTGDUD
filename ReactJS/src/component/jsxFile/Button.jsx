import React from 'react'
import '../cssFile/Button.css'


function Button(props) {
  return (
    <button className= {props.color} >{props.title}</button>
  )
}

export default Button