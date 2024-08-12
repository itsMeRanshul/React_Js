import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(0) //[value,function]
  //let counter=0
  
  let addval= ()=>{
    if(counter<20){
    counter=counter+1
    setcounter(counter)
    }
  }

  let remval=() =>{
    if(counter>0){
    counter=counter-1
    setcounter(counter) // update the value of counter all over the UI.
    }
  }
  return (
    <>
     <h1>Chain or code</h1>
     <h2>Counter {counter}</h2>
     <button className='add' onClick={addval}>Add Value {counter}</button>
     <br/>
     <button className='sub' onClick={remval}>Remove Value {counter}</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
