import React, { useState } from 'react'
import '../cssFile/Counter.css'

function Counter() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(c => c + 1);
    }

    function descrease() {
       setCount(c => (c -1 < 0)? 0 : c-1);
    }



  return (
    <>
    <div>COUNTER</div>
    <button onClick={descrease}>-</button>
    <span className={(count>10)? 'redNum':''}>{count}</span>
    <button class="increase" onClick={increase}>+</button>
    <div>
        <button onClick={()=> {
            setCount(c => c = 0);
        }}>reset</button>
    </div>
    </>
  )
}

export default Counter