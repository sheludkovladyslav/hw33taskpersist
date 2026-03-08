import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: true,
  reducers: {
    toggleNotifications(state) {
      return !state;
    },
  },
});

export const { toggleNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
