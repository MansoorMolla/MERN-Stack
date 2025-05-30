import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log('FancyInput focus method is called');
      inputRef.current.focus();
    }
  }));

  console.log('Rendering FancyInput component');
  return <input ref={inputRef} />;
});

function UseImperativeHandleHook() {
  const inputRef = useRef();

  console.log('Rendering App component');
  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={() => {
        console.log('Button click event');
        inputRef.current.focus();
      }}>
        Focus the input
      </button>
    </div>
  );
}

export default UseImperativeHandleHook;
