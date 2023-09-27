import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')


  const celsiusConvertion=(event)=>{
    const value= event.target.value;
    setCelsius(value);
    setFahrenheit(value*9/5+32)

  }
  const fahrenheitConvertion= (event)=>{
    const value= event.target.value;
    setFahrenheit(value);
    setCelsius((value-32)*5/9);

  }

  return (
    <>
      <h1>Temperature Convertion </h1>
      <div id="container">
      <input className='inputd in1' type="text" onChange={celsiusConvertion} placeholder='Celsius' value={celsius}/>
      <input className='inputd in2' type="text" onChange={fahrenheitConvertion} placeholder="fahrenheit" value={fahrenheit}/>
      </div>
    </>
  )
}

export default App
