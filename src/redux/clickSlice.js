import { createSlice } from "@reduxjs/toolkit";

const clickSlice = createSlice({
  name: "click",
  initialState: 0,
  reducers: {
    addClick(state) {
      return state + 1;
    },
  },
});

export const { addClick } = clickSlice.actions;
export default clickSlice.reducer;
