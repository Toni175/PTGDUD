import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/jsxFile/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <div>
      <label htmlFor="">Hello ReactJS</label>
     </div>
     <Button color="primary" title='BTN Primary'/>
     <Button color="danger" title='BTN Danger'/>
     <Button color="success" title='BTN Success'/>

    </>
  )
}

export default App
