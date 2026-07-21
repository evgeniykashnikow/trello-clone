import { useQuery } from '@tanstack/react-query';
import { getBoard } from '@/api/controllers/board';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { axiosQueryTransform } from '@/utils/axiosQueryTransform';

export const useBoardQuery = () => {
  const { data, isLoading } = useQuery({
    queryFn: getBoard,
    queryKey: [QUERY_KEYS.GET_BOARD],
    select: axiosQueryTransform,
  });

  return { board: data, isLoading };
};
