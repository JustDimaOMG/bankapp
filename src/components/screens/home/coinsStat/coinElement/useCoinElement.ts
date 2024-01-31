import { useQuery } from '@tanstack/react-query';
import { GetCoinService } from 'services/GetCoin.service';

export const useCoinElement = (name: string) => {


  const { data } = useQuery({
    queryKey: [`${name}`],
    queryFn: () => GetCoinService.getCoin(name),
    enabled: true,
    refetchInterval: 60000, 
  });

  return { data };
};
