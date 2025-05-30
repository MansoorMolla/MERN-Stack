import { createSlice, configureStore } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    Name: '',
    Email: '',
    PhoneNumber: null
  },
  reducers: {
    addName: (state, action) => {
      state.Name = action.payload;
    },
    addEmail: (state, action) => {
      state.Email = action.payload;
    },
    addPhone: (state, action) => {
      state.PhoneNumber = action.payload;
    }
  }
});

const store = configureStore({
  reducer: userSlice.reducer
});

console.log('Before dispatch function called store data', store.getState());
store.dispatch(userSlice.actions.addName('Mansoor'));
console.log('After dispatch function called store data', store.getState());
store.dispatch(userSlice.actions.addEmail('mansoor@gmail.com'));
store.dispatch(userSlice.actions.addPhone('9704556016'));
