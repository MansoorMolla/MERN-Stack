const { useState } = require("react");


function StateInFunctionalComponent() {
    let [initial, updateState] = useState(0);
    return (
        <>
            <h1>State in Functional Component : {initial}</h1>
            <button onClick={() => {
                updateState(++initial)
            }}>INCREMENT</button> 
            <button onClick={() => {
                updateState(--initial)
            }}>DECREMENT</button>
        </>
    )
}

export default StateInFunctionalComponent;
