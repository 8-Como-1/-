import React, { memo } from 'react';
import { UIFocus } from './style';
import { Button } from 'antd';
import { useAppDispatch } from '@/store';
import { changeShowModal } from '@/views/login/store';

const Focus = () => {
  const dispatch = useAppDispatch();
  //登录弹框回调
  const handlelogin = () => {
    dispatch(changeShowModal(true));
  };

  return (
    <UIFocus>
      <div className="content wrap-v2">
        <img
          src="https://img0.baidu.com/it/u=188690494,389268886&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300"
          alt=""
        />
        <h2>关注明星 发现精彩</h2>
        <h6>你可以关注明星和好友品味他们地私房歌单</h6>
        <h6>通过他们的动态发现更多精彩音乐</h6>
        <Button type="primary" onClick={handlelogin}>
          立即登录
        </Button>
      </div>
    </UIFocus>
  );
};

export default memo(Focus);
