import styled from 'styled-components';

export const UIRankingTop = styled.div`
  width: 100%;
  height: 238px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UICenter = styled.div`
  width: 660px;
  height: 155px;
  display: flex;

  .image {
    width: 158px;
    height: 158px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    margin-left: 20px;
    width: 100%;
    height: 100%;
    background-color: yellow;

    .name {
      font-size: 20px;
      padding-top: 10px;
    }

    .update {
      margin-top: 10px;
      font-size: 12px;
      color: #666;
    }

    .btn {
      padding-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
