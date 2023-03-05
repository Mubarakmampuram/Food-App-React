import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || {},
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state, action) => {
      const productID = action.payload;
      const currentCount = state.cartItems[productID] || 0;
      cartItems[productID] = currentCount + 1;

      localStorage.setItem("cart", JSON.stringify(cartItems));
    },
    decrement: (state, action) => {
      const productID = action.payload;
      const currentCount = state.cartItems[productID] || 0;
      if (currentCount) {
        cartItems[productID] = currentCount - 1;
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    },
  },
});

export const { increment, decrement, cartItems } = cartSlice.actions;

export default cartSlice.reducer;
