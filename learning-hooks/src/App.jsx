import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function incrCounter() {
    setCount(count+1);
  }
  function decrCounter() {
    setCount(count-1);
  }


  return (
    <>
         <h2>counter : {count}</h2>
         <button onClick={incrCounter}>Click me to Increase Counter</button>
         <button onClick={decrCounter}>Click me to Decrease Counter</button>
    </>
  )
}

export default App
