// In uncontrolled components, the form elements handle their own state without relying on React state (useState).
// Instead of using useState, we use useRef to directly access the input field.
// Key Points of Uncontrolled Components:
// The input field maintains its own state, and we access its value using useRef.
// There is no state update on every keystroke, making it more performant in some cases.
// Useful for integrating with third-party libraries like DOM manipulation libraries.   

import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert("Entered Text: " + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UncontrolledInput;
