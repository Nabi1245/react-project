import React, { useState } from "react";

const UseState = () => {
  // 🧠 What is State?

  // State = data that can change on the screen

  // Example:

  // Counter value

  // Show/Hide text

  // Form input value

  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h1>UseState</h1>
      <h1>Count: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px",
          borderRadius: "10px",
          background: "#f0f0f0",
          cursor: "pointer",
          border: "none",
          marginRight:"20px"
        }}
      >
        Increase
      </button>
      <button
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
        style={{
          padding: "10px",
          borderRadius: "10px",
          background: "#f0f0f0",
          cursor: "pointer",
          border: "none",
          marginRight:"20px"
        }}
      >
        Decrement
      </button>
       <button
        onClick={() => setCount(0)}
        style={{
          padding: "10px",
          borderRadius: "10px",
          background: "#f0f0f0",
          cursor: "pointer",
          border: "none",
          marginRight:"20px"
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseState;
