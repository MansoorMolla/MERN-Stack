import { createStore } from "redux";


const initialState = {
    Name: '',
    Email: '',
    PhoneNumber: null
}

function reducer(state = initialState, action) {
    if (action.type === 'addName') {
        return { ...state, Name: action.payload }
    } else if (action.type === 'addEmail') {
        return { ...state, Email: action.payload }
    } else if (action.type === 'addPhone') {
        return { ...state, PhoneNumber: action.payload }
    } else {
        return state
    }
}

const store = createStore(reducer)

console.log('Before dispatch function called store data',store.getState());
store.dispatch({ type: 'addName', payload: 'Mansoor' });
console.log('After dispatch function called store data',store.getState());
store.dispatch({ type: 'addEmail', payload: 'mansoor@gmail.com' });
store.dispatch({ type: 'addPhone', payload: '9704556016' });


