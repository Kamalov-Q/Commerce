import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // 1
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

      // 2
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
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      // 1
      /* const foundItem = state.items.find((item) => item.id === productId);
      if (foundItem) {
        if (foundItem.quantity > 1) {
          foundItem.quantity -= 1;
        } else {
          state.items.splice(foundItem, 1);
        }
        console.log("Item qtn is decreased");
      } else {
        console.log("Items not found");
      } */

      // 2
      const foundIndex = state.items.findIndex((item) => item.id === productId);
      if (foundIndex !== -1) {
        const item = state.items[foundIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(foundIndex, 1);
        }
        console.log("Item qtn is decreased");
      } else {
        console.log("Items not found");
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = productsSlice.actions;
export default productsSlice.reducer;
