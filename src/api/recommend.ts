import { request } from './request';

//获取轮播图
export const getBanners = () => {
  return request.get('/banner');
};

//获取热门推荐
export const getHotRecommend = (limit: number) => {
  return request.get('/personalized', {
    params: { limit },
  });
};

//获取新碟上架
export const getNewAlbum = () => {
  return request.get('/album/newest');
};

//获取榜单，飙升版，新歌榜，原创榜，飙升榜，电音榜
export const getPlaylistDetail = (id: number) => {
  return request.get('/playlist/detail', {
    params: { id },
  });
};

//获取入驻歌手的清单
export const getArtistList = (limit: number = 30) => {
  return request.get('/artist/list', {
    params: { limit },
  });
};
