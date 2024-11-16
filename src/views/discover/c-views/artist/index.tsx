import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Artist: React.FC<IProps> = () => {
  return <div>歌手</div>;
};

export default memo(Artist);
