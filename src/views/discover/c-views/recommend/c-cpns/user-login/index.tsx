import React, { memo } from 'react';
import { UILoginWrapper } from './style';
import { useAppDispatch } from '@/store';
import { changeShowModal } from '@/views/login/store';

const UserLogin = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeShowModal(true))
  }

  return (
    <UILoginWrapper>
      <p className="desc sprite_02">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无线同步到手机
      </p>
      <a  className="sprite_02" onClick={handleClick}>
        用户登录
      </a>
    </UILoginWrapper>
  );
};

export default memo(UserLogin);
