import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./product-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
