import { Table } from '@/components/Table';
import axios, { AxiosRequestConfig } from '@/services/axios';
import { _wrapper } from '@/services';

export function PostList() {
  const res = _wrapper(async () => {
    const res = await axios.get<AxiosRequestConfig>('/hello');
    return res;
  });
  const get = res();

  console.log(get);
  return <Table rows={undefined} dataLength={0} />;
}
