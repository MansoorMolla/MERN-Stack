import { useRef, useEffect } from "react";

function UseRefHook() {
    const inputElement = useRef();

    useEffect(() => {
        console.log("DOM Element: ", inputElement.current);
    }, []);

    const focusInput = () => {
        console.log("Focusing on the input element: ", inputElement.current);
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

export default UseRefHook;



// import React, { useRef } from 'react';
 
// const App = () => {
//   const inputRef = useRef();
 
//   const handleClick = () => {
//     console.log('Button clicked');
//     console.log(`Current input value: ${inputRef.current.value}`);
//     alert(`Input Value: ${inputRef.current.value}`);
//   };
 
//   console.log('Rendering App component');
 
//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={handleClick}>Show Input Value</button>
//     </div>
//   );
// };
 
// export default App;
 
