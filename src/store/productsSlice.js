import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { quantity, productId } = action.payload;
      const foundIndex = state.product.findIndex(
        (item) => item.productId === productId
      );
      if (foundIndex >= 0) {
        state.product[foundIndex].quantity += quantity;
      } else {
        state.product.push({ quantity, productId });
      }
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter(
        (item) => item?.id !== action.payload
      );
      state.length -= 1;
    },
    clearCart: (state) => {
      state.product = initialState.product;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = productsSlice.actions;
export default productsSlice.reducer;
