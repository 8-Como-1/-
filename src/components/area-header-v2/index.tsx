import React from 'react';
import { UIAreaHeaderV2 } from './style';

const AreaHeaderV2 = ({
  title,
  moreText,
  moreLink,
}: {
  title?: string;
  moreText?: string;
  moreLink?: string;
}) => {
  return (
    <UIAreaHeaderV2>
      <h3 className="title">{title}</h3>
      <a href={moreLink}>{moreText}</a>
    </UIAreaHeaderV2>
  );
};

export default AreaHeaderV2;
