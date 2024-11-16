import React from 'react';
import { UILeft } from './style';
import { useAppSelector } from '@/store';
import { RankingSmallItem } from '@/components/ranking-small-item';
import { getImageSize } from '@/utils/format';

export const Left = () => {
  const cloudMusicSpecial = useAppSelector(
    (state) => state.rankings.cloudMusicSpecial,
  );
  return (
    <UILeft>
      <div>
        <div className="top">云音乐特色版</div>
        <div className="content">
          {cloudMusicSpecial.slice(0, 4).map((item) => {
            // console.log('云音乐', item);
            return (
              <RankingSmallItem
                picUrl={getImageSize(item.coverImgUrl, 40)}
                title={item.name}
                updateTime={item.updateFrequency}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="top">全球媒体榜</div>
        <div className="content">
          {cloudMusicSpecial.slice(4, 56).map((item) => {
            // console.log('云音乐', item);
            return (
              <RankingSmallItem
                picUrl={getImageSize(item.coverImgUrl, 40)}
                title={item.name}
                updateTime={item.updateFrequency}
              />
            );
          })}
        </div>
      </div>
    </UILeft>
  );
};
