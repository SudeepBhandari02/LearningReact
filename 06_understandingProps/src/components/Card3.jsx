import React from 'react'

const Cards3 = (props) => {
  return (
    <div className="card" style={{"height":"120px"}}>
        <h3>I am card Component 3 </h3>
        <h4>Count and counter handling function has been passed to me </h4>
        <h5>count : {props.count}</h5>
        <button onClick={props.handleClick}>Incr Count</button>
    </div>
  )
}

export default Cards3