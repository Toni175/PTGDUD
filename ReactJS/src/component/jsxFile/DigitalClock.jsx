import React, { useEffect, useState } from 'react'

function DigitalClock() {

    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())


    useEffect(()=>{

        setHours(hours => hours = new Date().getHours())
        
        setMinutes(minutes => 
            minutes = new Date().getMinutes()
        )

        setSeconds(seconds => 
            seconds = new Date().getSeconds()
        )

    },[hours, minutes, seconds])


  return (
    <div>
        <h1>{`${hours}:${minutes}:${seconds}`}</h1>
    </div>
  )
}

export default DigitalClock