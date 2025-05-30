import React, { useState, useRef, useEffect } from "react";

const PersistValueExample = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; // Update previous value after every render
  }, [count]);

  const handleClick = () => {
    setCount(count + 1); // Causes re-render
  };

  return (
    <div>
      <h3>Current Count: {count}</h3>
      <h4>Previous Count (persisted via useRef): {prevCountRef.current}</h4>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default PersistValueExample;
