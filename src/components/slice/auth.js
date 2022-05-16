
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import DataService from "../../services/DataService";

const user = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk(
    "users/login/superadmin",
    async (login_data, thunkAPI) => {
        const { username, password } = login_data
        try {
            const data = await DataService.login(username, password);
            console.log('dataD', data)
            return data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
        // console.log('USERNAME', user)
        // console.log('PASSWORD', pswd)
        // console.log('login', login_data)
    }
);

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            console.log('loginT' , action)
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        },
        [login.rejected]: (state, action) => {
            console.log('loginF', action)
            state.isLoggedIn = false;
            state.user = null;
            state.message = action.error.message;
        },
    },
});

const { reducer } = authSlice;
export default reducer;