import { setName } from "../redux/formSlice";
import { useSelector, useDispatch } from "react-redux";

export const Form = () => {
  const name = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <div>
      <form action="">
        <input
          type="text"
          required
          onChange={(event) => dispatch(setName(event.target.value))}
        />
      </form>

      <p>Ім'я: {name}</p>
    </div>
  );
};
