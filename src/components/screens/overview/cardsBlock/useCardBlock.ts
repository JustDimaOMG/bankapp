import { useQuery } from '@tanstack/react-query'
import { useActions } from 'hooks/useActions'
import Cookies from 'js-cookie'
import { DashboardService } from 'services/Dashboard.service'

import { TOKEN } from '../../../../constants/app.constants'

export const useCardBlock = async () => {
	const action = useActions()
	const id = Cookies.get(TOKEN) || ''

	const { data } = await useQuery({
		queryKey: ['cards'],
		queryFn: () => DashboardService.GetCards(id)
	})
	if (data) {
		if (typeof data === 'string') {
			return data
		} else {
			action.enterCards(data)
			return data
		}
	}
}
