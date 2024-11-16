import styled from 'styled-components';

export const UISingerWrapper = styled.div`
  padding: 20px;

  .artists {
    .item {
      display: flex;
      height: 62px;
      margin-top: 14px;
      backgroun-color: #fafafa;
      text-decoration: none;

      &:hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3px 12px;
        border: 1px solid #e9e9e9;
        border-left: none;
        overflow: hidden;

        .singer {
          font-size: 14px;
          font-weight: 700;
          color: #000;
        }

        .desc {
          font-size: 12px;
          color: #666;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;

    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: inline-block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
      padding: 0 49px;
    }
  }
`;
