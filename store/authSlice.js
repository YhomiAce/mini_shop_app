import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateToken: (state, action) => {
            state.token = action.payload,
            state.isLoggedIn = true
        },
        clearToken: (state) => {
            state.isLoggedIn = false,
            state.token = null
        }
    }
});

export const {updateToken, clearToken} = authSlice.actions
export default authSlice.reducer;