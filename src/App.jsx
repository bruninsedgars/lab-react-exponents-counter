import React, { useState } from 'react';
import Counter from './Counter';
import Exponent from './Exponent';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <Counter count={count} increment={increment} decrement={decrement} />
      <Exponent num={count} exponent={2} />
      <Exponent num={count} exponent={3} />
      <Exponent num={count} exponent={4} />
    </div>
  );
}

export default App;
