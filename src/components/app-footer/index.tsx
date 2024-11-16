import React, { memo } from 'react';
import { UIAppFooter } from './style';
import { SevenService } from './sevenService';

interface IProps {
  children?: React.ReactNode;
}

const AppFooter: React.FC<IProps> = () => {

  return (
    <UIAppFooter>
      <div className="wrap-v1">
        <div className="wrap-v2 content">
          <SevenService />
          <div >
            <a href="https://jubao.163.com/" target='_blank'>廉正举报</a>&nbsp;&nbsp; 不良信息举报邮箱: 51jubao@service.netease.com &nbsp;&nbsp;客服热线: 95163298 
          </div>
          <div>
            互联网宗教信息服务许可证:&nbsp;&nbsp;浙(2022)&nbsp;0000120 &nbsp;增值电信业务经营许可证:&nbsp;&nbsp;浙B2-20150198 <a href='https://beian.miit.gov.cn/#/Integrated/index' target='_blank'>&nbsp;粤B2-20090191-18&nbsp;工业和信息化部备案管理系统网站</a>
          </div>
          <div className='last'>
            网易公司版权所有@1997-2024&nbsp;&nbsp;杭州乐读科技有限公司运营:&nbsp;&nbsp;
            <a href="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34942157981/2e30/30c1/ad1f/7be053a28e91dd8bafe49bdf6455cb2a.png" target='_blank'>&nbsp;浙网文[2024] 0900-042号&nbsp;</a>
            <a href='https://beian.mps.gov.cn/#/query/webSearch' target='_blank'>&nbsp;浙公网安备&nbsp;33010802013307&nbsp;&nbsp;</a>
            <a href='https://y.music.163.com/m/at/661f2af6e36f7c50ead8994b' target='_blank'>&nbsp;算法服务公示信息&nbsp;</a>
          </div>
          
        </div>
      </div>
    </UIAppFooter>
  );
};

export default memo(AppFooter);
