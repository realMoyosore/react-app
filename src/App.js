import { useState } from 'react';

const CounterButtons = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  );
}

export default MyApp = () => {
  return (
    <>
      <h1>Counters that updated separately</h1>
      <CounterButtons />
      <CounterButtons />
    </>
  );
}