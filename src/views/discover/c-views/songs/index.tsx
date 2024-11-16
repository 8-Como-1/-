import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Songs: React.FC<IProps> = () => {
  return <div>歌曲</div>;
};

export default memo(Songs);
