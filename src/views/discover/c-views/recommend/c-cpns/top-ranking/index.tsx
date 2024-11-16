import { memo } from 'react';
import { UITopRanking } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import TopRankingItem from '../top-ranking-item';

const TopRanking = () => {
  const { rankings } = useAppSelector((state) => {
    return {
      rankings: state.recommend.rankings,
    };
  }, shallowEqual);

  return (
    <UITopRanking>
      <AreaHeaderV1 title="榜单" moreText="更多" moreLink="/discover/ranking" />
      <div className="content">
        {rankings?.map((item) => {
          // console.log(item);
          return <TopRankingItem key={item?.id} itemData={item} />;
        })}
      </div>
    </UITopRanking>
  );
};

export default memo(TopRanking);
