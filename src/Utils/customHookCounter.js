import { useState } from "react";

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

export default useCounter;


// import React from "react";
// import useCounter from "./useCounter";

// const CounterComponent = () => {
//   const { count, increment, decrement, reset } = useCounter(0, 1);

//   return (
//     <div>
//       <h2>Counter: {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default CounterComponent;
