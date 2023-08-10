import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store/index.js";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const isCounterVisible = useSelector((state) => state.isCounterVisible);
  const dispatch = useDispatch();

  function handleIncrementCounter() {
    dispatch(counterActions.increment(10));
  }

  function handleDecrementCounter() {
    dispatch(counterActions.decrement());
  }

  function handleToggleCounter() {
    dispatch(counterActions.toggleCounterVisibility());
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Counter Value</th>
          <th>Increment Button</th>
          <th>Decrement Button</th>
          <th>Toggle Button</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{isCounterVisible ? counter : "?"}</td>
          <td>
            <button className="btn btn--green" onClick={handleIncrementCounter}>
              Increment Counter
            </button>
          </td>
          <td>
            <button className="btn btn--red" onClick={handleDecrementCounter}>
              Decrement Counter
            </button>
          </td>
          <td>
            <button className="btn btn--yellow" onClick={handleToggleCounter}>
              {isCounterVisible ? "Hide" : "Show"} Counter
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Counter;
