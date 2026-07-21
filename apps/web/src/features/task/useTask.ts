import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask, deleteTask, updateTask } from '@/api/controllers/tasks';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useTask = () => {
  const queryClient = useQueryClient();
  const invalidate = () => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_BOARD] });

  const addTaskMut = useMutation({
    mutationFn: (v: { columnId: string; title: string }) => createTask(v.columnId, v.title),
    onSuccess: invalidate,
  });
  const updateTaskMut = useMutation({
    mutationFn: (v: { id: string; title?: string; description?: string; columnId?: string }) =>
      updateTask(v.id, { title: v.title, description: v.description, columnId: v.columnId }),
    onSuccess: invalidate,
  });
  const deleteTaskMut = useMutation({ mutationFn: deleteTask, onSuccess: invalidate });

  return {
    addTask: (columnId: string, title: string) => addTaskMut.mutate({ columnId, title }),
    updateTaskTitle: (id: string, title: string) => updateTaskMut.mutate({ id, title }),
    updateTaskDescription: (id: string, description: string) =>
      updateTaskMut.mutate({ id, description }),
    moveTask: (toColumnId: string, taskId: string) =>
      updateTaskMut.mutate({ id: taskId, columnId: toColumnId }),
    deleteTask: (id: string) => deleteTaskMut.mutate(id),
  };
};
