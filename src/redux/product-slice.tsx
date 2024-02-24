import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  theme: "light",
  products: [],
  product: {
    id: "",
    name: "",
    quantity: 0,
    code: "",
    price: 0,
    company: "",
  },
};

const productsSlice = createSlice({
  // slice name
  name: "users",
  initialState: initialState,
  reducers: {},
});



export default productsSlice.reducer;
