import { useState } from 'react'
import './App.css'
import Card1 from "./components/Card1.jsx";
import Card2 from "./components/Card2.jsx";
import Card3 from "./components/Card3.jsx";

function App() {
  const [count, setCount] = useState(0)

  const handleClick=()=>{
    setCount(count+1)
  }

  return (
    <>
      <h1>Let's understand props today</h1>
      <Card1 value="I am the passed value"/>

      <Card2>
        <h4>I am h4 tag and child of card 2</h4>
      </Card2>

      <Card3 handleClick={handleClick} count={count}/>
    </>
  )
}

export default App
