import Scrollbars from 'react-custom-scrollbars';
import styled from 'styled-components';

export const UIScrollbars = styled(Scrollbars)<{ padding?: number | string }>`
  > div + div {
    // 不要大过弹出层，弹出层通常在1000-2000
    z-index: 500;
  }
  width: ${(props) =>
    props.padding ? `calc(100% + ${props.padding}px)` : '100%'}!important;
`;
