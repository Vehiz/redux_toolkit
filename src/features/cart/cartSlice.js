import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
// const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export const cartReducer = cartSlice.reducer;
