// Controlled Components
// In controlled components, the form elements (like input, textarea, etc.) are controlled by the component state using React’s useState or useReducer.
// The input value is stored in the state, and any change in the input is handled by the onChange event to update the state.
// Key Points of Controlled Components:
// The value of the input field is always controlled by the state (useState).
// The onChange event updates the state every time the user types something.
// React has full control over the input field, making it easy to manage form validation and behavior.

import { useState } from "react";

function ControlledInput() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Entered Text: {text}</p>
    </div>
  );
}

export default ControlledInput;
