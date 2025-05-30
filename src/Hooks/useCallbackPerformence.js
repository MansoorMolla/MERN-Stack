import React, { useCallback, useState, useRef } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [trigger, setTrigger] = useState(0);

  // Only changes when `trigger` changes
  const handleClick = useCallback(() => {
    alert(`Button clicked. Trigger value: ${trigger}`);
  }, [trigger]);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Parent Count: {count}</p>
      <p>Trigger Value: {trigger}</p>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setTrigger(trigger + 1)}>Update Trigger</button>

      <Child onClick={handleClick} />
    </div>
  );
}

const Child = React.memo(({ onClick }) => {
  const renders = useRef(0);
  renders.current += 1;

  return (
    <div>
      <h2>Child Component</h2>
      <p>Child Render Count: {renders.current}</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

export default Parent;






















// import React, { useCallback } from 'react';

// function Parent() {
//   console.log("Parent rendered");

//   // Use useCallback to memoize the function
//   const handleButtonClick = useCallback(() => {
//     alert('Button clicked in the Child component!');
//   }, []); // No dependencies, so the function won't be recreated on every render

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       {/* Passing the memoized function as a prop */}
//       <Child onButtonClick={handleButtonClick} />
//     </div>
//   );
// }

// // React.memo prevents the Child from re-rendering if props don't change
// const Child = React.memo(({ onButtonClick }) => {
//   console.log("Child rendered");

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <button onClick={onButtonClick}>Click Me</button>
//     </div>
//   );
// });

// export default Parent;
