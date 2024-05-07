import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // useCallback will return a memoized version of the increment function
  // which only changes if count changes
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [setCount]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
