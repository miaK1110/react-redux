// configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

// createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types. these are know as the action creater, they automatically add an action identifiers and then pass to the reducer functions. We can mutate the state using createSlice. Redux toolkit uses a new package which will help us to mutate the state and then it automatically identifies that which state has been changed. And then it will send an automatically created copy of the state to the main app.
import { configureStore, createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducer: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = CounterSlice.actions;
// contains property of the reducer and thea we can provide it
const store = configureStore({
  reducer: CounterSlice.reducer,
});
export default store;
