import { initialState } from "@/core";
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  // slice name
  name: "products",
  initialState: initialState,
  reducers: {},
});

export default productsSlice.reducer;
