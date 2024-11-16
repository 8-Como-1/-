import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Djradio: React.FC<IProps> = () => {
  return <div>摇滚</div>;
};

export default memo(Djradio);
