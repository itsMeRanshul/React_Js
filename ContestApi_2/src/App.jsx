import { useEffect, useState } from 'react'
import './App.css'

import Card from './Component/Card'
import ThemeBtn from './Component/Themebtn'
import { ThemeProvider } from './Context/theme'

function App() {
  const [thememode,setthememode]=useState('light')

  const lightTheme=()=>{
    setthememode("light")
  }
  const darkTheme=()=>{
    setthememode("dark")
  }

  useEffect(()=>{
    console.log('Current theme mode:', thememode); 
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(thememode)
  },[thememode])
  return (
    <ThemeProvider value={{thememode,lightTheme,darkTheme}}>
                    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme Button */}
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card Button */}
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App
