import React, { useState, createContext, useContext } from 'react';

// Create a context
const CountContext = createContext();

const App = () => {
  // Define count and setCount using useState in the parent component
  const [count, setCount] = useState(0);

  return (
    // Provide the count state to child components
    <CountContext.Provider value={{ count, setCount }}>
      <Counter />
    </CountContext.Provider>
  );
}

const Counter = () => {
  // Use the count state in the child component
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
