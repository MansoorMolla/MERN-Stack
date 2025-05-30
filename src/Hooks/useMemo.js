import React, { useState, useMemo } from 'react';

function UseMemoHook() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value');
    let value = 1;
    for (let i = 0; i < 100; i++) {
      value += i;
    }
    return value;
  }, []); // Only run once

  console.log('Rendering App component');

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  );
}

export default UseMemoHook;


// import React, { useState, useCallback, useMemo } from 'react';

// function MyComponent() {
//   const [a, setA] = useState(1);
//   const [b, setB] = useState(2);

//   const sum = useMemo(() => {
//     console.log('Calculating sum...');
//     return a + b;
//   }, [a, b]); // `a` and `b` are dependencies

//   const mul = useCallback(() => {
//     console.log('Calculating multiplication...');
//     return a * b;
//   }, [a, b]); // `a` and `b` are dependencies

//   return (
//     <div>
//       <input type="number" value={a} onChange={e => setA(+e.target.value)} />
//       <input type="number" value={b} onChange={e => setB(+e.target.value)} />
//       <p>Sum: {sum}</p>
//       <p>Multiplication: {mul()}</p>
//     </div>
//   );
// }

// export default MyComponent;




// In React, a component re-renders when its state or props change. So, if you’re changing the value of an input (which is tied to a state variable), the component will re-render, even if the new value is the same as the old one.

// However, with useMemo and useCallback, even though the component re-renders, the memoized value or function won’t be recalculated or re-created unless their dependencies change.

// So, in the example I provided, if you type the same number into an input, the component will re-render, but the sum and mul won’t be recalculated or re-created because their dependencies (a and b) didn’t change.

// This is the power of useMemo and useCallback: they allow you to optimize certain parts of your component (like heavy computations or function creations) while still allowing other parts to update normally.