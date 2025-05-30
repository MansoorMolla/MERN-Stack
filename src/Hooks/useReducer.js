import { useReducer } from "react";

function updateFunction(state, action) {
    if (action.type === 'reset') return 0;
    return state + action;

}

function UseReducerHook() {
    let [initial, dispatch] = useReducer(updateFunction, 0);
    return (
        <>
            <h1>Update counter value using useReducer in React : {initial}</h1>
            <button onClick={() => {
                dispatch(+1)
            }}>INCREMENT</button>
            <button onClick={() => {
                dispatch(-1)
            }}>DECREMENT</button>
            <button onClick={() => { dispatch({ type: 'reset' }) }}>DEC</button>
        </>
    )
}

export default UseReducerHook;











// import { useReducer } from "react";

// const UpdateFunction = (state, action) => {
//   switch(action.type) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return 0;
//     default:
//       return state;
//   }
// }

// const App  = () => {
//   const [count, dispatch] = useReducer(UpdateFunction, 0);
//   return(
//     <>
//       <h1>Current value is : {count}</h1>
//       <button onClick={() => {dispatch({type: 'increment'})}}>INC</button>
//       <button onClick={() => {dispatch({type: 'decrement'})}}>DEC</button>
//       <button onClick={() => {dispatch({type: 'reset'})}}>RESET</button>
//     </>
//   )
// }

// export default App;
