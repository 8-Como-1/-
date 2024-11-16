import React, { memo, useRef, ElementRef } from 'react';
import AreaHeaderV1 from '@/components/area-header-v1';
import { UIAlbumWrapper } from './style';
import { Carousel } from 'antd';
import { useAppSelector } from '@/store';
import NewAlbumItem from '@/components/new-album-item';
import { shallowEqual } from 'react-redux';

//新碟上架
const NewAlbum: React.FC = () => {
  const { newAlbums } = useAppSelector((state) => {
    return { newAlbums: state.recommend.newAlbum };
  }, shallowEqual);

  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  const handlePrevClick = () => {
    bannerRef.current?.prev();
  };
  const handleNextClick = () => {
    bannerRef.current?.next();
  };

  return (
    <UIAlbumWrapper>
      <AreaHeaderV1
        title="新碟上架"
        moreText="更多"
        moreLink="/discover/album"
      />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        />
        <div className="banner">
          <Carousel dots={false} ref={bannerRef} speed={2000}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums?.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        />
      </div>
    </UIAlbumWrapper>
  );
};

export default memo(NewAlbum);
