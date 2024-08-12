import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <>
       <h1>Bundler</h1>
    </>
  )
}
const name=' ranshul kumar jayant'
// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click this to visit google .com'
// }
const ReactElement=React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'
  },
  'Click it to open the website',name
)

ReactDOM.createRoot(document.getElementById('root')).render(

    
    ReactElement
    
 
)
