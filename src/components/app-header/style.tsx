import styled from 'styled-components';

export const UIHeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const UIHeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: top left;
    text-indent: -9999px;
  }

  .title-list {
    display: flex;
    line-height: 70px;

    .item {
      position: relative;

      a {
        display: block;
        color: #ccc;
        padding: 0 20px;
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;

export const UIHeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    border-color: transparent;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    color: #ccc;
    cursor: pointer;

    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }

  .login {
    color: #787878;
    cursor: pointer;

    &:hover {
      color: #fff
  }
`;
