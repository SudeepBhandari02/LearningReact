import React, { useState } from "react";

function WithoutUseState() {
  const [count, setCount] = useState(0);

  // This function is recreated on every render
  const increment = () => {
    setCount(count + 1);
  };

  console.log("Function recreated:", increment);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default WithoutUseState;
