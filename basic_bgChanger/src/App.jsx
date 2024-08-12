import { useState } from "react"


function App() {
  const [color,setcolor]=useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"><div className="flex flex-wrap justify-center gap-3 shadow-xl bg-black px-4 py-2 rounded-3xl">
        <button onClick={()=> setcolor('Red')}
        className="outline-none px-2 py-1 rounded-full text-white" style={{backgroundColor:'red'}}>Red</button>
        <button onClick={()=> setcolor('Blue')}className="outline-none px-2 py-1 rounded-full text-white" style={{backgroundColor:'blue'}}>Blue</button>
        <button onClick={()=> setcolor('Yellow')}
        className="outline-none px-2 py-1 rounded-full text-white" style={{backgroundColor:'yellow'}}>Yellow</button>
        <button onClick={()=> setcolor('Green')}
        className="outline-none px-2 py-1 rounded-full text-white" style={{backgroundColor:'green'}}>Green</button>
        <button onClick={()=> setcolor('lavender')}
        className="outline-none px-2 py-1 rounded-full text-white" style={{backgroundColor:'lavender'}}>lavender</button>
        <button onClick={()=> setcolor('Purple')}
        className="outline-none px-2 py-1 rounded-full text-white" style={{backgroundColor:'Purple'}}>Purple</button>
        <button onClick={()=> setcolor('skyblue')}
        className="outline-none px-2 py-1 rounded-full text-white" style={{backgroundColor:'skyblue'}}>skyBlue</button>
        </div></div>
     </div>
    </>
  )
}

export default App
