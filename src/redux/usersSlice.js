import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [{ id: 1, name: "Vlad", age: 15 }],
  reducers: {
    addUser(state, action) {
      return [...state, action.payload];
    },

    removeUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
