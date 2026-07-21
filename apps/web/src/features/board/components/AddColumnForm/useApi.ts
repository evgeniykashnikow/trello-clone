import { useMutation } from '@tanstack/react-query';
import { createColumn } from '@/api/controllers/columns';
import { queryClient } from '@/config/queryClient';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useApi = () => {
  const { mutate: createColumnMutation } = useMutation({
    mutationFn: createColumn,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_BOARD] }),
  });

  return { createColumnMutation };
};
