import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },

    decrement(state) {
      return state - 1;
    },

    incrementByAmount(state, action) {
      return state + action.payload;
    },

    clear() {
      return 0;
    },
  },
});

export const { increment, decrement, clear, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
