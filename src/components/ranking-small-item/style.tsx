import styled from 'styled-components';

export const UISmallItem = styled.div`
  width: 240px;
  height: 62px;
  display: flex;
  align-items: center;
  // background-color: gray;

  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

export const UIcenter = styled.div`
  width: 220px;
  height: 40px;
  margin-left: 20px;
  // background-color: pink;
  display: flex;

  img {
    width: 40px;
    height: 40px;
    // background-color: yellow;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40px;
    margin-left: 8px;
    font-size: 12px;

    .title {
      color: #000;
    }
    .updateTime {
      color: #999;
    }
  }
`;
