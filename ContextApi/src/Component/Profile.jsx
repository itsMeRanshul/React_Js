import React from 'react'
import { useContext } from 'react'
import userContext from '../Context/UserContext'

function Profile() {
    const {user}=useContext(userContext)

    if(!user) return <div>Please Login</div>
    
  return (
    <>
    <div>PROFILE</div>
    <div>Name : {user.username}</div>
    </>
  )
}

export default Profile
