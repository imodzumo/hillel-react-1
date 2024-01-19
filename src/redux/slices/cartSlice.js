import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PIZZA_API} from "../../constants.js";

const initialState = {
	items: [],
	menuItems: [],
	isLoading: false,
	isError: false,
}

export const getMenuItems = createAsyncThunk('cart/getMenuItems', async ()=> {
	const res = await fetch(`${PIZZA_API}/menu`);
	const {data} = await res.json();

	return data;
})

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, {payload}) => {
			const item = state.items.find(item => item.id === payload.id);

			if (item) {
				++item.qty;
			} else {
				state.items.push({...payload, qty: 1});
			}

			// state.items.push(payload);
		},
		deleteFromCart: (state, {payload})=> {
			state.items = state.items.filter(item => item.id !== payload.id)
		},
		decrementQty: (state, {payload}) => {
			const item = state.items.find(item => item.id === payload.id);

			if (item.qty <= 1) {
				state.items = state.items.filter(item => item.id !== payload.id)
			}

			--item.qty;
		},
		incrementQty: (state, {payload}) => {
			const item = state.items.find(item => item.id === payload.id);
			++item.qty;
		}
	},
	extraReducers: (builder)=> {
		builder.addCase(getMenuItems.pending, (state, action) => {
			state.isError = false;
			state.isLoading = true;
		});
		builder.addCase(getMenuItems.fulfilled, (state, {payload}) => {
			state.menuItems = payload;
			state.isLoading = false;
		});
		builder.addCase(getMenuItems.rejected, (state, {payload}) => {
			state.isError = true;
			state.isLoading = false;
		});
	}
})

export const {addToCart, deleteFromCart, decrementQty, incrementQty} = cartSlice.actions;
export default cartSlice.reducer;
