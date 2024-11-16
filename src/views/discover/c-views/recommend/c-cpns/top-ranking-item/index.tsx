import React, { memo } from 'react';
import { UIRankingItemWrapper } from './style';
import { getImageSize } from '@/utils/format';
import { useAppDispatch } from '@/store';
import { fetchCurrentSongAction } from '@/views/player/store';

const TopRankingItem = (props: any) => {
  // const { tracks = [] } = itemData;
  // if (itemData !== undefined && itemData.tracks !== undefined) {
  //   const { tracks = [] } = itemData;
  // }
  const { itemData } = props;
  const { tracks = [] } = itemData;

  //点击榜单歌曲回调事件
  const dispatch = useAppDispatch();
  const handleInfo = (id: number) => {
    dispatch(fetchCurrentSongAction(id));
  };

  return (
    <UIRankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData?.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData?.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {itemData?.tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item?.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item?.name}</div>
                <div className="operator">
                  <button
                    className="btn sprite_02 play"
                    onClick={() => {
                      handleInfo(item?.id);
                    }}
                  ></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking">查看全部 &gt;</a>
      </div>
    </UIRankingItemWrapper>
  );
};

export default memo(TopRankingItem);
