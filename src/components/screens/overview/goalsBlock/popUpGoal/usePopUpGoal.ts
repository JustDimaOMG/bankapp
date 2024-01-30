import { useMutation, useQueryClient} from '@tanstack/react-query'
import { TOKEN } from '../../../../../constants/app.constants'
import { IGoal } from 'interfaces/IGoal'
import Cookies from 'js-cookie'
import { DashboardService } from 'services/Dashboard.service'


export const usePopUpGoal = () => {
  const id = Cookies.get(TOKEN) || ''
  const queryClient = useQueryClient()

  const {mutate} = useMutation({
    mutationFn: (dataGoal:IGoal) => {   
      dataGoal.id = id
      return DashboardService.PostGoal(dataGoal)
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['goals'] })
      console.log(data, 'ok', );
    }
  })

  return mutate
} 
