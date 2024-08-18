import React from "react";
import userContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children})=>{
    const [user,setuser]=useState(null)
    return (
    <userContext.Provider value={{user,setuser}} >
       {children}  
    </userContext.Provider>
)}

export default UserContextProvider