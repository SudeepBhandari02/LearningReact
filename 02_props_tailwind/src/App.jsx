import { useState } from 'react'
import './App.css'
import Card from './components/Card'

let userInfo={
  name:"Sudeep",
  role:"Web Developer",
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold underline text-blue-600 dark:text-sky-400">Hey There</h1>
     <Card name={userInfo.name} role={userInfo.role}/>
     <br />
     <Card name="Rajeev" role="Designer"/>
    </>
  )
}

export default App
