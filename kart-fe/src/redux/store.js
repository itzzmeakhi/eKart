import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { productsReducer, productDetailsReducer } from './products/reducer';

const middleware = [thunk];

const store = configureStore({
    reducer: {
        products: productsReducer,
        pdp: productDetailsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});

export default store;