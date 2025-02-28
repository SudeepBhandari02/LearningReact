import React from 'react'

const Card2 = (props) => {
  return (
    <div className="card">
        <h3>I am card component 2</h3>
        {props.children}
    </div>
  )
}

export default Card2;