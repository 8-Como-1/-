import { UISmallItem, UIcenter } from './style';
import { getImageSize } from '@/utils/format';

export const RankingSmallItem = ({
  picUrl,
  title = '飙升榜',
  updateTime = '每天更新',
}: {
  picUrl: string;
  title: string;
  updateTime: string;
}) => {
  return (
    <UISmallItem>
      <UIcenter>
        <img src={picUrl} alt="" />
        <div className="info">
          <div className="title">{title}</div>
          <div className="updateTime">{updateTime}</div>
        </div>
      </UIcenter>
    </UISmallItem>
  );
};
