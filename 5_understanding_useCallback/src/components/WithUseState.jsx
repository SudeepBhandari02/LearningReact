import React, { useState, useCallback } from "react";

function WithUseState() {
  const [count, setCount] = useState(0);

  // Memoizing the function using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Dependencies are empty, so the function will not be recreated unless needed

  console.log("Function reference:", increment);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default WithUseState;