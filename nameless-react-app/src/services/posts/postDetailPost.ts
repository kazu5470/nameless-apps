import { _wrapper } from '@/services';
import axios, { AxiosRequestConfig } from '@/services/axios';

type PostDetailPostRequestProps = {
  content: string;
};

type PostDetailPostResponseProps = {
  id: string;
};

export const postPost = _wrapper(async (req?: PostDetailPostRequestProps) => {
  if (!req) {
    throw new Error('Post is empty');
  }
  const url = '/posts/new';
  const res = axios.post<AxiosRequestConfig, PostDetailPostResponseProps>(
    url,
    req,
  );
  return res;
});
