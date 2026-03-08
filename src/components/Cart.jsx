import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../redux/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [id, setId] = useState(2);

  const handleAdd = () => {
    if (!value) return;
    dispatch(addItem({ id, product: value }));
    setId(id + 1);
    setValue("");
  };

  return (
    <div>
      <h1>Cart</h1>

      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={handleAdd}>Add</button>

      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.product}</span>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}

      <button onClick={() => dispatch(clearCart())}>Clear cart</button>
    </div>
  );
}
