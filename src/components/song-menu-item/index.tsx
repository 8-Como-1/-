import React, { memo } from 'react';
import { UIMenuItemWrapper } from './style';
import '@/assets/css/common.less';
import { formatCount, getImageSize } from '@/utils/format';

interface IProps {
  children?: React.ReactNode;
  itemData?: any;
}

//歌单卡片
const SongMenuItem: React.FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <UIMenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </UIMenuItemWrapper>
  );
};

export default memo(SongMenuItem);
