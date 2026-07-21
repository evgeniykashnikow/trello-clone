import type { Board } from '@trello/shared';
import { axiosInstance } from '@/config/axiosInstance';

export const getBoard = () => axiosInstance.get<Board>('/board');
