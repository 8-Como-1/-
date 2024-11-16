import { BASE_URL, TIME_OUT } from './config';
import HYRequest from './request';
import axios from 'axios';

//创建一个axios实例
const hyRequest = new HYRequest({
  baseURL: BASE_URL, //基础URL
  timeout: TIME_OUT, //超时时间
  //请求头
  headers: new axios.AxiosHeaders(),
  //拦截器
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    },
  },
});

export default hyRequest;
