import React from 'react'
import "./cards.css"

const Card1 = (props) => {
  return (
    <div className="card">
        <h3>I am card Component 1 </h3>
        <h4>Value passed to me is : {props.value}</h4>
    </div>
  )
}

export default Card1