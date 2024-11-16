import { request } from '@/api/request';

export function getSongDetail(ids: number) {
  return request.get('/song/detail', {
    params: {
      ids,
    },
  });
}

export const getSongLyric = (id: number) => {
  return request.get('/lyric', {
    params: {
      id,
    },
  })
};
