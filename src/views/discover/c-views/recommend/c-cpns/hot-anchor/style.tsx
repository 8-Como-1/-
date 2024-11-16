import styled from 'styled-components';

export const UIAnchorWrapper = styled.div`
  padding: 20px;

  .anchors {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;

      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;

        a {
          .name {
            color: #000;
            font-weight: 700;
            margin-top: 3px;
          }

          &:hover {
            text-decoration: underline;
          }
        }

        .position {
          color: #666;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-top: 6px;
        }
      }
    }
  }
`;
