import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
