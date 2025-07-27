import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="main-page">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Click the buttons to change the count.</p>
      <p>Current count is: {count}</p>
    </section>
  );
};

export default App;
