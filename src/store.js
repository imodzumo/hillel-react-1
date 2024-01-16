import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./redux/slices/authSlice.js";
import cartReducer from "./redux/slices/cartSlice.js";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,
	}
});
