import React, { memo, useRef, useState, ElementRef } from 'react';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import { BannerLeft, BannerWrapper, BannerRight, BannerControl } from './style';
import { Carousel } from 'antd';
import '@/assets/css/common.less';
import classNames from 'classnames';
import { throttle } from 'lodash';

interface IProps {
  children?: React.ReactNode;
}

const TopBanner: React.FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 获取轮播图数据
  const { banners } = useAppSelector((state) => {
    return {
      banners: state.recommend.banners,
    };
  }, shallowEqual);

  // 左右按钮点击事件
  const handleLeftClick = () => {
    bannerRef.current?.prev();
  };
  const handleRightClick = () => {
    bannerRef.current?.next();
  };

  // 轮播图切换后事件
  const handleAfterChange = (current: number) => {
    setCurrentIndex(current);
  };

  // 获取当前轮播图索引
  let bgImgUrl;
  if (banners !== undefined && currentIndex >= 0 && banners.length > 0) {
    bgImgUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20';
  }

  return (
    <BannerWrapper
      style={{
        backgroundImage: `url(${bgImgUrl})`,
        backgroundSize: '6000px',
        backgroundPosition: 'center',
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            ref={bannerRef}
            effect="fade"
            dots={false}
            afterChange={handleAfterChange}
          >
            {banners?.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
          <ul className="dots">
            {banners?.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex,
                    })}
                  ></span>
                </li>
              );
            })}
          </ul>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button className="btn left" onClick={handleLeftClick} />
          <button className="btn right" onClick={handleRightClick} />
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
