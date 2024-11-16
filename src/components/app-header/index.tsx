import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { UIHeaderWrapper, UIHeaderLeft, UIHeaderRight } from './style';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '@/assets/css/common.less';
import headerTitles from '@/assets/data/header_titles.json';
import { useAppDispatch } from '@/store';
import { changeShowModal } from '@/views/login/store/index';

interface IProps {
  children?: React.ReactNode;
}

const AppHeader: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();

  //  根据type判断是path还是link,如果是path则使用Link组件,否则使用a标签
  const showItem = (item: any) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined;
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      );
    }
  };
  
  // 点击登录按钮，显示登录弹窗
  const handleLogin = () => {
    dispatch(changeShowModal(true));
  }

  return (
    <UIHeaderWrapper>
      <div className="content wrap-v1">
        <UIHeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </UIHeaderLeft>
        <UIHeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <span className="login" onClick={handleLogin}>登录</span>
        </UIHeaderRight>
      </div>
      <div className="divider"></div>
    </UIHeaderWrapper>
  );
};

export default memo(AppHeader);
