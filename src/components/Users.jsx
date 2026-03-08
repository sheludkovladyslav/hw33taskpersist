import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/usersSlice";

export default function Users() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleUser = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users.length + 1, name: userName, age: userAge }));
    setUserAge(0);
    setUserName("");
  };
  return (
    <div>
      <form action="" onSubmit={handleUser}>
        <input
          type="text"
          placeholder="Ваше ім'я"
          required
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Ваш вік"
          required
          value={userAge}
          onChange={(event) => setUserAge(event.target.value)}
        />

        <button type="submit">Додати юзера</button>
      </form>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>Ім'я: {user.name}</h2>
            <h3>Вік {user.age}</h3>

            <button onClick={() => dispatch(removeUser(user.id))}>
              Видалити користувача
            </button>
          </div>
        );
      })}
    </div>
  );
}
