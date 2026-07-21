import type { UpdateTaskData } from '@/api/models/task';
import { axiosInstance } from '@/config/axiosInstance';

export const createTask = (columnId: string, title: string) =>
  axiosInstance.post('/tasks', { columnId, title });

export const updateTask = (id: string, data: UpdateTaskData) =>
  axiosInstance.patch(`/tasks/${id}`, data);

export const deleteTask = (id: string) => axiosInstance.delete(`/tasks/${id}`);
