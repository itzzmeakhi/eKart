import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        userInfo: null,
        error: null
    },
    reducers: {
        loginUserStart(state) {
            state.isLoading = true;
        },
        loginUserSuccess(state, action) {
            state.isLoading = false;
            state.userInfo = action.payload;
        },
        loginUserFailure(state, action) {
            state.isLoading = false;
            state.userInfo = null;
            state.error = action.payload;
        }
    }
});

export default userSlice.reducer;

export const { loginUserStart, loginUserSuccess, loginUserFailure } = userSlice.actions;