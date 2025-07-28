import { useState } from 'react';

const CounterButtons = ({ count, setCount }) => {  

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
const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count Up {count} Count Down</h1>
      <CounterButtons count={count} setCount={setCount}/>
    </>
  );
}