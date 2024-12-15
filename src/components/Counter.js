import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../features/counterSlice";


const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle_counter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={() => dispatch(counterActions.increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(counterActions.decrement())}>
          Decrement
        </button>
        <button
          // {type: SOME_UNIQUE_IDENTIFIER, payload:5}
          onClick={() => dispatch(counterActions.increase(5))}>
          Increase By 5
        </button>
        <button onClick={() => dispatch(dispatch(counterActions.decrease(3)))}>
          Decrease By 3
        </button>
        <button onClick={() => dispatch(counterActions.increase(10))}>
          Increase By 10
        </button>
        <button onClick={() => dispatch(counterActions.decrease(15))}>
          Decrease By 15
        </button>
        <button onClick={() => dispatch(counterActions.reset())}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>
        {show ? "Hide-Counter🕶️" : "Show-Counter🔍"}
      </button>
    </main>
  );
};

export default Counter;
