import { _wrapper } from '@/services';
import axios, { AxiosRequestConfig } from '@/services/axios';

export const getPostList = _wrapper(async () => {
  const res = await axios.get<AxiosRequestConfig>('/hello');
  return res;
});
