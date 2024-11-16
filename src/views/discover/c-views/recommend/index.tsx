import { useAppDispatch } from '@/store';
import React, { memo, useEffect } from 'react';
import { fetchRecommendDataAction, fetchRankingDataAction } from './store';
import TopBanner from './c-cpns/top-banner';
import '@/assets/css/common.less';
import { UIRecommendWrapper } from './style';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import TopRanking from './c-cpns/top-ranking';
import UserLogin from './c-cpns/user-login';
import ResidentSinger from './c-cpns/resident-singer';
import HotAnchor from './c-cpns/hot-anchor';

const Recommend: React.FC = () => {
  const dispatch = useAppDispatch();
  //发起action获取数据
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
    dispatch(fetchRankingDataAction());
  }, []);

  return (
    <UIRecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <ResidentSinger />
          <HotAnchor />
        </div>
      </div>
    </UIRecommendWrapper>
  );
};

export default memo(Recommend);
