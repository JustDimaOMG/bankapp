import { createSlice } from '@reduxjs/toolkit'
import { AUTH, TOKEN } from '../constants/app.constants';
import Cookies from 'js-cookie'

interface AuthState {
  userState: {
    isAuth: boolean;
		firstName: string,
		lastName: string
		img: string
  };
}

const initialValue = Cookies.get(AUTH) || false

const localValue = localStorage.getItem('user')


const initialState: AuthState = {
  userState: {
    isAuth:initialValue,
		firstName: localValue ? JSON.parse(localValue).firstName : '',
		lastName: localValue ? JSON.parse(localValue).lastName : '',
		img: localValue ? JSON.parse(localValue).img : '',
  },
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, actions) {
			state.userState.isAuth = true
			state.userState.firstName = actions.payload.firstName
			state.userState.lastName = actions.payload.lastName
			state.userState.img = actions.payload.img 
			Cookies.set(AUTH, true)
			localStorage.setItem('user', JSON.stringify(actions.payload));			
		},

		logout(state) {
			state.userState.isAuth = false
			Cookies.remove(AUTH)
			Cookies.remove(TOKEN)
			state.userState.firstName = ''
			state.userState.lastName = ''
			state.userState.img = ''
			localStorage.removeItem('user');

		},
	}
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer

