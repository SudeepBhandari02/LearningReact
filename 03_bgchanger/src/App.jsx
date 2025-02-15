import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  function changeColor(colour) {
    setColor(colour);
  }
  return (
  <>
     <h1 className="">A background changer</h1>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button style={{backgroundColor:"red"}} onClick={()=>changeColor('red')}>Red</button>
          <button style={{backgroundColor:"yellow"}} onClick={()=>setColor('yellow')}>Yellow</button>
          <button style={{backgroundColor:"blue"}} onClick={()=>changeColor('blue')}>Blue</button>
          <button style={{backgroundColor:"orange"}} onClick={()=>changeColor('orange')}>Orange</button>
          <button style={{backgroundColor:"purple"}} onClick={()=>changeColor('purple')}>Purple</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
