import React, { memo } from 'react';
import { UIAlbumWrapper } from './style';
import { getImageSize } from '@/utils/format';
import '@/assets/css/common.less';
import { useAppDispatch } from '@/store';
import { fetchCurrentSongAction } from '@/views/player/store';

//新碟上架的专辑卡片
const NewAlbumItem = ({ itemData }: { itemData: any }) => {
  const dispatch = useAppDispatch();
  const handlePlay = (id: number) => {
    dispatch(fetchCurrentSongAction(id));
  };

  return (
    <UIAlbumWrapper>
      <div className="top ">
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_cover"></a>
        <i
          className="play sprite_icon"
          onClick={() => {
            handlePlay(itemData.id);
          }}
        ></i>
      </div>
      <div className="bottom">
        <a className="name" href="#">
          {itemData.name}
        </a>
        <a className="artist" href="#">
          {itemData.artist.name}
        </a>
      </div>
    </UIAlbumWrapper>
  );
};

export default memo(NewAlbumItem);
