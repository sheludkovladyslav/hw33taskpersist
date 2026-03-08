import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "themeSwitch",
  initialState: false,
  reducers: {
    switchTheme(state) {
      return state === "bright" ? "dark" : "bright";
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
