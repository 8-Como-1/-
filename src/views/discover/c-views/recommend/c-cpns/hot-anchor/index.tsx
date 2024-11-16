import React, { memo } from 'react';
import { UIAnchorWrapper } from './style';
import AreaHeaderV2 from '@/components/area-header-v2';
import { hotRadios } from '@/assets/data/local-data';

const HotAnchor = () => {
  return (
    <UIAnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="anchors">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <a href="">
                  <div className="name">{item.name}</div>
                </a>
                <div className="position">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </UIAnchorWrapper>
  );
};

export default memo(HotAnchor);
