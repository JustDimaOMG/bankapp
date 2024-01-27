import { useQuery } from "@tanstack/react-query";
import { TOKEN } from "../../../../constants/app.constants";
import { DashboardService } from "services/Dashboard.service";
import Cookies from 'js-cookie';
import { useActions } from "hooks/useActions";

export const useCardBlock = async (setError: React.Dispatch<React.SetStateAction<string | null>>) => {
  const action = useActions()
  const id = Cookies.get(TOKEN) || '';

  const { data } = await useQuery({
    queryKey: ["cards", id],
    queryFn: () => DashboardService.GetCards(id),
  });
  
  if (typeof data === 'string') {
    setError(data);
  } else {
    action.enterCards(data);
  }

  return data;
};
