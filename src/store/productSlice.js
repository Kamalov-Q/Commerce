/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  length: 0,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.product.push(action.payload);
      state.length += 1;
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter(
        (item) => item?.id !== action.payload
      );
      state.length -= 1;
    },
    clearCart: (state) => {
      state.length = initialState.length;
      state.product = initialState.product;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = productSlice.actions;
export default productSlice.reducer;
