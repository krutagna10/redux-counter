import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  toggleCounterVisibility,
} from "../../store/counterSlice.js";

function Counter() {
  const { counter, isCounterVisible } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  function handleIncrementCounter() {
    dispatch(incrementCounter());
  }

  function handleDecrementCounter() {
    dispatch(decrementCounter());
  }

  function handleToggleCounterVisibility() {
    dispatch(toggleCounterVisibility());
  }

  return (
    <>
      <h2 className="text-center">Redux Counter</h2>
      <table>
        <thead>
          <tr>
            {isCounterVisible && <th>Counter Value</th>}
            <th>Increment Button</th>
            <th>Decrement Button</th>
            <th>Toggle Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {isCounterVisible && <td>{counter}</td>}
            <td>
              <button
                className="btn btn--green"
                onClick={handleIncrementCounter}
              >
                Increment Counter
              </button>
            </td>
            <td>
              <button className="btn btn--red" onClick={handleDecrementCounter}>
                Decrement Counter
              </button>
            </td>
            <td>
              <button
                className="btn btn--yellow"
                onClick={handleToggleCounterVisibility}
              >
                {isCounterVisible ? "Hide" : "Show"} Counter
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Counter;
