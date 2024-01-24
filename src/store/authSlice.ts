import { createSlice } from '@reduxjs/toolkit'
import { AUTH } from '../constants/app.constants';
import Cookies from 'js-cookie'

interface AuthState {
  userState: {
    isAuth: boolean;
  };
}

const initialValue = Cookies.get(AUTH) || false

const initialState: AuthState = {
  userState: {
    isAuth:initialValue,
  },
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state) {
			state.userState.isAuth = true
			Cookies.set(AUTH, true)
		},

		logout(state) {
			state.userState.isAuth = false
			Cookies.set(AUTH, false)

		},
	}
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer

