import React from 'react'

function Squares(props) {
    return (
      <button className="square" onClick={props.onSquareClick}>
        {props.value}
      </button>
    );
  }

export default Squares