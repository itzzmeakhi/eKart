import axios from 'axios';

import {
    addCartItem,
    removeCartItem
} from './reducer';

export const addItemToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(addCartItem({
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }));
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    dispatch(removeCartItem(id));
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};