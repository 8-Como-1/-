import React from 'react';
import { Divider } from 'antd';
import './style.less';

export const SevenService = () => {
  const serviceList = [
    '服务条款',
    '隐私政策',
    '儿童隐私政策',
    '版权投诉',
    '投资者关系',
    '广告合作',
    '联系我们',
  ];

  return (
    <div className="seven">
      {serviceList?.map((item, index) => {
        if (index === serviceList.length - 1) {
          return <a key={index}>{item}</a>;
        }
        return (
          <a key={index}>
            {item}
            <Divider type="vertical" />
          </a>
        );
      })}
    </div>
  );
};
