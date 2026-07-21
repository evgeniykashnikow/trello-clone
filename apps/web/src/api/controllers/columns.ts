import { ColumnUpdateRequest } from '@/api/models/column';
import { axiosInstance } from '@/config/axiosInstance';

export const createColumn = (title: string) => axiosInstance.post('/columns', { title });

export const updateColumn = ({ id, title }: ColumnUpdateRequest) =>
  axiosInstance.patch(`/columns/${id}`, { title });

export const deleteColumn = (id: string) => axiosInstance.delete(`/columns/${id}`);
