import { $axiosServer } from 'api/api'
import { IGoal } from 'interfaces/IGoal'

export const DashboardService = {
	async GetCards(id: string) {
		try {
			const { data: existingCard } = await $axiosServer.get(`cards?id=${id}`)

			if (existingCard && existingCard.length === 0) {
				return "You don't have any cards yet"
			}

			return existingCard
		} catch (error) {
			console.log(error)
		}
	},

	async GetGoals(id: string) {
		try {
			const { data: exisitingGoal } = await $axiosServer.get(`goals?id=${id}`)

			if (exisitingGoal && exisitingGoal.length === 0) {
				return "You don't have any goals yet"
			}
			return exisitingGoal
		} catch (error) {
			console.log(error)
		}
	},

	async PostGoal(dataGoal: IGoal) {
		try {
			const { data } = await $axiosServer.post(`goals`, dataGoal)

			return data
		} catch (error) {
			console.log(error)
		}
	},

	async GetTransactions(id: string) {
		try {
			const { data: exisitingTransactions } = await $axiosServer.get(
				`transactions?id=${id}`
			)

			if (exisitingTransactions && exisitingTransactions.length === 0) {
				
				return "You don't have any transactions yet"
			}

			return exisitingTransactions

		} catch (error) {
			console.log(error)
		}
	}
}
