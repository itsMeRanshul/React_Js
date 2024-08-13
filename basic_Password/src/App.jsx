import { useState , useCallback ,useEffect, useRef} from 'react'

function App() {
  const [len, setlength] = useState(8)
  const [numAllow,setnumberAllow]=useState(false)
  const [charAllow,setCharAllow]=useState(false)
  const [password,setpassword]=useState("")

  //Ref hook
  const passwordRef=useRef(null)

  const CopypasswordtoClipboard=useCallback(()=>{
    // To high light the copied text
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,9)
    // copy the password to the clipboard
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator= useCallback(()=> {

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz"
    if(numAllow) str+="0123456789"
    if(charAllow) str+="!@#$%^&*(){}+_"
    for(let i=1;i<=len;i++)
    {
      let char=Math.floor(Math.random() * str.length+1)

      pass+= str.charAt(char)
    }

    setpassword(pass)

  },[len,numAllow,charAllow,setpassword])

  useEffect(()=>{
    passwordGenerator()
  },[len,numAllow,charAllow,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3
     my-8 text-orange-500 bg-gray-700 '>
      <h1 className='text-white  text-center my-3'> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-nontext-white bg-black mx-1 px-2 rounded-xl shrink-0'
          onClick={CopypasswordtoClipboard}
          >Copy</button>
      </div>
      <div className='flex text-sm gap-x-4'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          max={100}
          min={6}
          value={len}
          className='cursor-pointer'
          onChange={(e)=> {setlength(e.target.value)}}
          />
          <label >Length : {len}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type='checkbox'
            defaultChecked={numAllow}
            id='numberInput'
            onChange={(e)=> {
              setnumberAllow((prev)=> !prev)
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type='checkbox'
           defaultChecked={charAllow}
           id='charInput'
           onChange={()=>{
            setCharAllow((prev)=>!prev)
           }}
          />
          <label>Character</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
