import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL, TIME_OUT } from './config';
import { message } from 'antd';
import QS from 'qs';

export const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

// 请求拦截器
request.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    message.error(err.message);
    return Promise.reject(err);
  },
);

//响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 400:
          message.error('网络太拥挤了，请稍后再试');
          break;
        case 401:
          message.error('未授权，请登录');
          break;
        case 403:
          message.error('拒绝访问');
          break;
        case 404:
          message.error('请求的资源不存在');
          break;
        case 500:
          message.error('服务器内部错误');
          break;
        default:
          message.error(`连接错误 ${err.response.status}`);
      }
    } else {
      // 没有收到服务器的响应
      message.error('网络错误，无法连接到服务器');
    }
    return Promise.reject(err);
  },
);

declare module 'axios' {
  interface AxiosResponse<T = any> {
    // 这个地方放属性
    banners: any;
    result: any;
    albums: any;
    artists: any;
    songs: any;
    lrc: any;
    list: any;
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}
