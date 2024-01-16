import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	items: []
}

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
	}
})

export const {addToCart, deleteFromCart, decrementQty, incrementQty} = cartSlice.actions;
export default cartSlice.reducer;
