import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
import './App.css';

function App() {
  // useSelector() provides access to the Redux store state.
  const counter = useSelector((state) => state.counter);

  // dispatch is used whenever we awant to send the date to the redux store.
  // useDispatch() function will help us to dispatch Action. We have to provide a unique action, and then the Redux store will fetch the action and then it will update the store.
  const dispatch = useDispatch();

  const increment = () => {
    // provide unique action here
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy());
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value</button>
    </div>
  );
}

export default App;
