import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { GetCoinService } from 'services/GetCoin.service';

export const useCoinElement = (name: string) => {
  const { data, refetch } = useQuery({
    queryKey: [`${name}`],
    queryFn: () => GetCoinService.getCoin(name),
    enabled: true,
    refetchInterval: 60000, 
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  return { data };
};
