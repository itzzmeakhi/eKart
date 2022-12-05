import axios from 'axios';

import {
    loginUserStart,
    loginUserSuccess,
    loginUserFailure
} from './reducer';

const loginUser = ({ email, password }) => async (dispatch) => {
    try {
        dispatch(loginUserStart());

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/users/login', {
            email,
            password
        }, config);

        localStorage.setItem('userInfo', JSON.stringify(data));

        dispatch(loginUserSuccess(data));
    } catch (err) {
        const msg = err.message;
        dispatch(loginUserFailure(msg));
    }
};