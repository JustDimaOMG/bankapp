import { createContext, useContext, useState } from 'react'

import  users  from '../data/usersData/Users.data.js'
import { IUser } from '../interfaces/IUser.js'
import Router from '../routes/Router.js'



const myContext = createContext(undefined)

export const useAuth = () => useContext(myContext)

export const Auth = () => {
	const [logUser, setLogUser] = useState({
		username: '',
		isAuth: false
	})

	const login = async (

	) => {
		try {
			const userProfile = users.find(
				profile => profile.username === credentials.username
			)

			if (userProfile) {
				if (userProfile.password === credentials.password) {
					setLogUser({
						username: credentials.username,
						isAuth: true
					})
				} else {
					console.log('Inorrect password')
				}
			} else {
				console.log('User not found')
			}
		} catch (error) {
			console.log(error)
		}
	}

	const logout = async () => {
		setLogUser({ ...logUser, isAuth: false })
	}

	return (
		<myContext.Provider value={{ logUser, login, logout }}>
			<Router />
		</myContext.Provider>
	)
}
