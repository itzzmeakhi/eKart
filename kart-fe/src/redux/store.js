import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { productsReducer, productDetailsReducer } from './products/reducer';
import cartReducer from './cart/reducer';

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
};

const store = configureStore({
    reducer: {
        products: productsReducer,
        pdp: productDetailsReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    preloadedState: initialState
});

export default store;