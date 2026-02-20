import React, { useState, useEffect, use } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  //   useEffect(() => {
  //     console.log('use Effect executed')
  //     document.title = `button clicked for ${count} times`;
  //   }); // run on every state change and at the first render

  //   useEffect(() => {
  //     console.log('use Effect executed')
  //     document.title = `button clicked for ${count} times`;
  //   }, [text]); // run on every dependedt state change and at the first render

  useEffect(() => {
    console.log("use Effect executed");
    document.title = `button clicked for ${count} times`;
  }, []); // it only runs once when componnet renders for tge first time

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>decrement</button>

      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  );
}

export default Counter;

// Whenever component loads, useEffect fires up automatically
// Everytime there is a state change, the useEffect runs
// It executes at the end of the render cycle
// Even is there is a state that is not dependent on the useEffect, it will still run when that causes a state change. To prevent this use the dependency array.

