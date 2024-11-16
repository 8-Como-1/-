import { memo, useEffect } from 'react';
import { UIRankingWrapper } from './style';
import { useAppDispatch } from '@/store';
import {  fetchAllRankingDataAction } from './store';
import { Left } from './left';
import { Right } from './right';

const Ranking = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllRankingDataAction());
  }, []);

  return (
    <UIRankingWrapper className="wrap-v2">
      <Left />
      <Right />
    </UIRankingWrapper>
  );
};

export default memo(Ranking);
