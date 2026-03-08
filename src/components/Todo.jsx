import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleCompleted } from "../redux/TodoSlice";
import { useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const formSubmitted = (event) => {
    console.log(inputValue);
    event.preventDefault();
    dispatch(addTodo({ inputValue }));
    setInputValue("");
  };

  return (
    <>
      <form action="" onSubmit={formSubmitted}>
        <input
          type="text"
          placeholder="ім'я задачі"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2 id={todo.name}>{todo.name}</h2>
            <input
              type="checkbox"
              name={todo.name}
              value={todo.checked}
              onChange={() => {
                dispatch(toggleCompleted(todo.id));
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
