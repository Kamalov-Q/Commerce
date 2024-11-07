import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const { product } = action.payload;
      // const foundIndex = Array.from(state.items).findIndex(
      //   (item) => item?.id === product.id
      // );
      // if (foundIndex === -1) {
      //   state.items = [...state.items, { ...product, quantity: 1 }];
      //   // state.items.push({ ...product, quantity: 1 });
      // } else {
      //   state.items[foundIndex].quantity += 1;
      // }

      const { product } = action.payload;

      const foundItems = Array.from(state.items).find((item) => {
        return item.id === product.id;
      });

      if (foundItems) {
        foundItems.quantity += 1;
      } else {
        state.items = [...state.items, { ...product, quantity: 1 }];
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = productsSlice.actions;
export default productsSlice.reducer;
