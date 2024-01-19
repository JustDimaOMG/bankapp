import { $axiosCoin } from "api/api"

export const GetCoinService = {
	async getCoin(name: string): Promise<string> {
		return await $axiosCoin.get(`price?symbol=${name}USDT`)
	}
}
