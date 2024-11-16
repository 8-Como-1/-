import React, { memo } from 'react';
import { UIHeaderV1Wrapper } from './style';
import { Link } from 'react-router-dom';

//热门推荐，新碟上架的模板
const AreaHeaderV1 = ({
  title,
  keywords,
  moreText,
  moreLink,
}: {
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}) => {
  return (
    <UIHeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                {index < keywords?.length - 1 && (
                  <span className="divider">|</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink ? moreLink : '/'} className="more">
          {moreText}
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </UIHeaderV1Wrapper>
  );
};

export default memo(AreaHeaderV1);
