import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [{ id: 1, product: "Potato" }],
  reducers: {
    addItem(state, action) {
      return [...state, action.payload];
    },

    removeItem(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },

    clearCart() {
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
