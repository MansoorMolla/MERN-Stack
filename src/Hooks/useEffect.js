const { useState, useEffect } = require("react");

function UseEffectHook() {
    let [initial, update] = useState(0);
    let [counter, updateCounter] = useState(0);

    useEffect(() => {
        console.log('useEffect callback argument log Inside UseEffect');
    }, [counter]
    );
    return (
        <>
            <h1>These is useEffect Hook in React Js</h1>
            {console.log('Inside Component these get first: 1')}
            <button onClick={() => {
                update(initial + 1)
            }}>Click to update</button>
            <button onClick={() => {
                updateCounter(counter + 1)
            }}>Click to update Counter</button>
        </>
    )
}

export default UseEffectHook;