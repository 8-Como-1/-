import React, { memo } from 'react';
import { UINavBarWrapper } from './style';
import { discoverMenu } from '@/assets/data/local-data';
import { NavLink } from 'react-router-dom';
import '@/assets/css/common.less';

interface IProps {
  children?: React.ReactNode;
}

const renderMenu = discoverMenu;

const NavBar: React.FC<IProps> = () => {
  return (
    <UINavBarWrapper>
      <div className="nav wrap-v1">
        {renderMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </UINavBarWrapper>
  );
};

export default memo(NavBar);
