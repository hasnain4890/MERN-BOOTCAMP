import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  cart: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showproducts: (state, action) => {},
    addToCart: (state, action) => {},
    removeFromcart: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { showproducts, addToCart, removeFromcart } = cartSlice.actions;

export default cartSlice.reducer;
