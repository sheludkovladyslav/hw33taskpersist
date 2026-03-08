import { addClick } from "../redux/clickSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Click() {
  const counter = useSelector((state) => state.click);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(addClick())}>increase</button>
    </div>
  );
}
