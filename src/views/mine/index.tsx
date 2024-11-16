import React, { memo } from 'react';
import { UIMineWrapper } from './style';
import { Button } from 'antd';
import { useAppDispatch } from '@/store';
import { changeShowModal } from '@/views/login/store';

const Mine = () => {
  const dispatch = useAppDispatch();
  //登录弹框回调
  const handlelogin = () => {
    dispatch(changeShowModal(true));
  };

  return (
    <UIMineWrapper>
      <div className="wrap-v2">
        <div className="content">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g6/M00/03/04/ChMkKmGpe7WIMdVPAAEQxBXB2N0AAWNhwI95aMAARDc458.jpg"
            alt=""
          />
          <h2>登录网易云音乐</h2>
          <h6>查看并管理你收藏的私房音乐，</h6>
          <h6>方便地随时随地收听</h6>
          <Button type="primary" onClick={handlelogin}>
            立即登录
          </Button>
        </div>
      </div>
    </UIMineWrapper>
  );
};

export default memo(Mine);
