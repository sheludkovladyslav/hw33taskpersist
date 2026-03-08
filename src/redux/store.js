import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import themeSwitchReducer from "../redux/themeSlice";
import todoReducer from "../redux/TodoSlice";
import modalReducer from "./modalSlice";
import cartReducer from "./cartSlice";
import languageReducer from "./languageSlice";
import notificationsReducer from "./notificationsSlice";
import clickReducer from "./clickSlice";
import usersReducer from "./usersSlice";
import formReducer from "./formSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeSwitchReducer,
    todo: todoReducer,
    modal: modalReducer,
    cart: cartReducer,
    language: languageReducer,
    notifications: notificationsReducer,
    click: clickReducer,
    users: usersReducer,
    form: formReducer,
  },
});
