import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";
import productsSlice from './productsSlice';

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    product: productsSlice,
  },
});
