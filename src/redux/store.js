import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
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

const rootReducer = combineReducers({
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
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export const persistor = persistStore(store);
