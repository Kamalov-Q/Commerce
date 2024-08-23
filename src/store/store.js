import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";
import productSlice from "./productSlice";

export const store = configureStore({
    reducer: {
        profile: profileSlice,
        product: productSlice
    }
})