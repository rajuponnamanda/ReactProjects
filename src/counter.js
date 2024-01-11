import React, { useState } from "react";

export default function Counter() {
  const [name, setName] = useState("Learning");
  const [count, setCount] = useState(0);
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <button onClick={() => setName("You Should Learn")}>Change</button>
      </center>

      <button onClick={() => setCount(count + 10)}>increase</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 10)}>decrease</button>
    </div>
  );
}
