import React, { memo } from 'react';
import { UISingerWrapper } from './style';
import AreaHeaderV2 from '@/components/area-header-v2';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import { getImageSize } from '@/utils/format';

const ResidentSinger = () => {
  const { residentSinger } = useAppSelector((state) => {
    return {
      residentSinger: state.recommend.artistList,
    };
  }, shallowEqual);

  return (
    <UISingerWrapper>
      <AreaHeaderV2
        moreText="查看全部 &gt;"
        title="入驻歌手"
        moreLink="/discover/artist"
      />
      <div className="artists">
        {residentSinger?.slice(0, 5).map((item) => {
          return (
            <a href="#/discover/artist" key={item.id} className="item">
              <img src={getImageSize(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias.join(' ')}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </UISingerWrapper>
  );
};

export default memo(ResidentSinger);
