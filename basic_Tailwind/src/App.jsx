import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myob={
    username:'Ranshul',
    university: 'Graphic era deemed university'
  }
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
     <Card  username="Sneha" btnText='Click me '/>
     <Card username='Nandini' btnText='Visit me '/>
    </>
  )
}

export default App
