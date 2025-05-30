import React, { useState, useCallback } from 'react';

function UseCallbackHook() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log('Increment function is called');
    setCount(count + 1);
  }, [count]);

  console.log('Rendering component');

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseCallbackHook;
