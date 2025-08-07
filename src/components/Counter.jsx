import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // count has initial value of 0
  return (
    <>
      <div id="counter">
        <button onClick={() => setCount(count - 1)}>Subtract</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>

      <button onClick={() => setCount(count * 2)}>Multiply by 2</button>
    </>
  );
}
