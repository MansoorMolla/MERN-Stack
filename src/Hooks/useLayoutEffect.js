import React, { useState, useLayoutEffect } from 'react';

function UseLayoutEffectHook() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log('useLayoutEffect is called');
    document.title = `You clicked ${count} times`;
  }, [count]);

  console.log('Rendering App component');

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseLayoutEffectHook;
