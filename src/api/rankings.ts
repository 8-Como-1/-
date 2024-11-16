import { request } from '@/api/request';

//获取所有榜单
export const getAllRankingsList = () => {
  return request.get('/toplist');
};

//获取所有榜单详情
export const getAllRankingsDetail = () => {
  return request.get('/toplist/detail');
};
