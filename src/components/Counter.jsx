import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  clear,
  incrementByAmount,
} from "../redux/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <>
      <p>Лічильник: {count}</p>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>

      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        increment by 5
      </button>

      <button
        onClick={() => {
          dispatch(clear());
        }}
      >
        clear
      </button>
    </>
  );
};
