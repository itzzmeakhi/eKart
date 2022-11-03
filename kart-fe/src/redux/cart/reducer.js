import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addCartItem(state, action) {
            const item = action.payload;
            const existingItem = state.cartItems.find(cItem => cItem.product === item.product);

            if (existingItem) {
                state.cartItems = state.cartItems.map(cItem => cItem.product === item.product ? item : cItem);
            } else {
                state.cartItems = [...state.cartItems, item];
            }
        },
        removeCartItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.product !== action.payload);
        }
    }
});

export default cartSlice.reducer;

export const { addCartItem, removeCartItem } = cartSlice.actions;