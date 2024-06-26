import axios, { AxiosRequestConfig as requestConfig } from 'axios';

export type AxiosRequestConfig = requestConfig<undefined>;

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9090/app', // ここでベースURLを設定
});

export default axiosInstance;
