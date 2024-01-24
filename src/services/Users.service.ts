import { $axiosServer } from 'api/api'
import { ILogUser, IUpdUser } from 'interfaces/IUser'
import Cookies from 'js-cookie'
import { nanoid } from 'nanoid'

import { TOKEN } from '../constants/app.constants'


export const UsersService = {


	async PostUser(userData: ILogUser) {
		const newUser = {
			id: nanoid(12),
			username: userData.username,
			password: userData.password,
			firstName: '',
			lastName: '',
			img: ''
		}
		try {
			const { data: existingUser } = await $axiosServer.get(
				`users?username=${userData.username}`
			)

			if (existingUser && existingUser.length > 0) {
				return 'This email is already use'
			}

			const { data, status } = await $axiosServer.post(
				`users?username=${userData.username}&password=${userData.password}`,
				newUser
			)

			if (status === 201) {
				Cookies.set(TOKEN, newUser.id)
			}
			return data
		} catch (error) {
			console.log(error)
		}
	},

	async GetUser(dataLog: ILogUser) {
		try {
			const { data: existingUser } = await $axiosServer.get(
				`users?username=${dataLog.username}`
			)

			if (existingUser && existingUser.length === 0) {
				return "This user doesn't exist"
			} else {
				const { data } = await $axiosServer.get(
					`users?username=${dataLog.username}&password=${dataLog.password}`
				)

				if (data && data.length === 0) {
					return "The password isn't match"
				} else {
					const receiveData = data[0]
					Cookies.set(TOKEN, receiveData.id)					
					return receiveData
				}
			}
		} catch (error) {
			console.log(error)
		}
	},

	async PutUser(data: IUpdUser) {
		return await $axiosServer.put(`users/${data.id}`, data)
	}
}
