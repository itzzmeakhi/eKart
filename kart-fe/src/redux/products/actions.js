import axios from 'axios';
import { 
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductStart,
    fetchProductSuccess,
    fetchProductFailure
} from './reducer';

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProductsStart());
        const { data } = await axios.get('/api/products');
        dispatch(fetchProductsSuccess(data));
    } catch (err) {
        const msg = err.message;
        dispatch(fetchProductsFailure(msg));
    }
};

export const fetchProduct = (id) => async (dispatch) => {
    try {
        dispatch(fetchProductStart());
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch(fetchProductSuccess(data));
    } catch (err) {
        const msg = err.message;
        dispatch(fetchProductFailure(msg));
    }
};