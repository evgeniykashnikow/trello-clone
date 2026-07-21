import type { AxiosResponse } from 'axios';

export const axiosQueryTransform = <T>(response: AxiosResponse<T>) => response.data;
