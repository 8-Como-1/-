import styled from 'styled-components';

export const UIHeaderV1Wrapper = styled.div`
  height: 33px;
  width: 646px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background-position: -225px -154px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, sans-serif, Helvetica;
      margin-right: 20px;
      margin-left: -20px;
    }

    .keywords {
      display: flex;
      align-items: center;

      .item {
        position: relative;
        top: 2px;

        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    top: 2px;

    .more {
      &:hover {
        text-decoration: underline;
        color: #333;
        cursor: pointer;
      }
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
