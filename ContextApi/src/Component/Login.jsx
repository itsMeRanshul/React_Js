import React from 'react'
import { useState } from 'react'
import userContext from '../Context/UserContext'
import { useCallback } from 'react'
import { useContext } from 'react'


function Login() {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

    const {setuser} =useContext(userContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setuser({username,password})
    }
  return (
   <div className= 'flex justify-center flex-col items-center p-4 m-2 w-full h-screen'>
    <div className=' bg-gray-400 p-16 rounded-xl'>
    <h2 className='px-10 bg-black text-white rounded-xl mb-6 text-xl '> LOGIN PAGE</h2>
    <div className='my-3 border-2 border-black p-1 rounded '>
    <input
    value={username}
      type='text'
      placeholder='Username'
      onChange={(e)=> setusername(e.target.value)}
      className='px-4'
    />
    </div>
    <div className='my-3 border-2 border-black p-1 rounded '>
    <input
    value={password}
     type='text'
     placeholder='Password'
     onChange={(e)=> setpassword(e.target.value)}
      className='px-4'
    />
    </div>
    <button className='bg-gray-700 text-white px-6 py-1 rounded-full hover:bg-black' onClick={handleSubmit}>Submit</button>
    </div>

   </div>
  )
}

export default Login
