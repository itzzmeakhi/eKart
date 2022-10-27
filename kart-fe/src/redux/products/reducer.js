import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        error: null,
        productsList: []
    },
    reducers: {
        fetchProductsStart(state) {
            state.loading = true;
            state.error = null;
            state.productsList = [];
        },
        fetchProductsSuccess(state, action) {
            state.loading = false;
            state.productsList = action.payload;
            state.error = null;
        },
        fetchProductsFailure(state, action) {
            state.loading = false;
            state.productsList = [];
            state.error = action.payload;
        },
    }
});

const pdpSlice = createSlice({
    name: 'pdp',
    initialState: {
        loading: false,
        error: null,
        product: {}
    },
    reducers: {
        fetchProductStart(state) {
            state.loading = true;
            state.error = null;
            state.product = {};
        },
        fetchProductSuccess(state, action) {
            state.loading = false;
            state.product = action.payload;
            state.error = null;
        },
        fetchProductFailure(state, action) {
            state.loading = false;
            state.product = {};
            state.error = action.payload;
        },
    }
});

export const { reducer: productsReducer } = productsSlice;
export const { reducer: productDetailsReducer } = pdpSlice;

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;
export const { fetchProductStart, fetchProductSuccess, fetchProductFailure } = pdpSlice.actions;
