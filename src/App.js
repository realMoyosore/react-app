import { useState } from 'react';

const CounterButtons = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default function MyApp() {
  return (
    <>
      <h1>Count Up {count} Count Down</h1>
      <CounterButtons />
    </>
  );
}