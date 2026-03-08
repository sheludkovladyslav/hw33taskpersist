import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotifications } from "../redux/notificationsSlice";

export default function Notifications() {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  return (
    <div>
      {notifications ? "Ваші сповіщення вимкнено" : "Ваші сповіщення увімкнено"}

      <button onClick={() => dispatch(toggleNotifications())}>
        {notifications ? "Ввімкнути сповіщення" : "Вимкнути сповіщення"}
      </button>
    </div>
  );
}
