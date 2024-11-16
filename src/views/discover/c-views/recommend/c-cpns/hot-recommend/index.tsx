import React, { memo } from 'react';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store/index';
import SongMenuItem from '@/components/song-menu-item';
import { UIRecommendWrapper } from './style';
import { shallowEqual } from 'react-redux';

const HotRecommend = () => {
  const { hotRecommends } = useAppSelector((state) => {
    return {
      hotRecommends: state.recommend.hotRecommend,
    };
  }, shallowEqual);

  return (
    <UIRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreText="更多"
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends?.map((item) => {
          return <SongMenuItem key={item?.id} itemData={item} />;
        })}
      </div>
    </UIRecommendWrapper>
  );
};

export default memo(HotRecommend);
