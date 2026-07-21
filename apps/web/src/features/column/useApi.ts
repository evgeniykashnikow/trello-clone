import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteColumn, updateColumn } from '@/api/controllers/columns';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useApi = () => {
  const queryClient = useQueryClient();
  const invalidate = () => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_BOARD] });

  const { mutate: updateColumnTitleMutation } = useMutation({
    mutationFn: updateColumn,
    onSuccess: invalidate,
  });

  const { mutate: deleteColumnMutation } = useMutation({
    mutationFn: deleteColumn,
    onSuccess: invalidate,
  });

  return {
    updateColumnTitleMutation,
    deleteColumnMutation,
  };
};
