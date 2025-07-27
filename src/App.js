import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
  <section className="main-page">
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </section>
  );
}

export default App;