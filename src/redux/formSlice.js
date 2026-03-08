import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: "",
  reducers: {
    setName(_, action) {
      return action.payload;
    },
  },
});

export const { setName } = formSlice.actions;
export default formSlice.reducer;
