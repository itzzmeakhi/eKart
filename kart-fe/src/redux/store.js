import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { productsReducer, productDetailsReducer } from './products/reducer';
import cartReducer from './cart/reducer';
import userReducer from './user/reducer';

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    },
    user: {
        userInfo: userInfoFromStorage
    }
};

const store = configureStore({
    reducer: {
        products: productsReducer,
        pdp: productDetailsReducer,
        cart: cartReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    preloadedState: initialState
});

export default store;