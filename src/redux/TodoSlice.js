import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: [{ id: 1, name: "Cleaning", checked: false }],
  reducers: {
    addTodo(state, action) {
      return [...state, action.payload];
    },

    removeTodo(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },

    toggleCompleted(state, action) {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.checked = !task.checked;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = TodoSlice.actions;
export default TodoSlice.reducer;
