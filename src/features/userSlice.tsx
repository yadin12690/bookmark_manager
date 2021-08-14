import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    },
});


export const { login, logout } = userSlice.actions;

// We export this that we could get the user state (loggedIn/loggedOut)
export const selectUser = (state: { user: { user: any; }; }) => state.user.user;

export default userSlice.reducer;