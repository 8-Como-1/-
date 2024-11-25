import styled from 'styled-components';
import '@/assets/theme/index';

export const UINavBarWrapper = styled.div`
  height: 30px;
  background-color: #c20c0c;

  .nav {
    display: flex;
    padding-left: 370px;
    position: relative;
    top: -4px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0px;
        color: #fff;
        font-size: 12px;

        &:hover,
        &.active {
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`;
