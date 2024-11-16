import styled from 'styled-components';

export const UIAlbumWrapper = styled.div`
  margin-left: 1 px;

  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }

    &:hover {
      .play {
        display: inline-block;
        position: absolute;
        right: 25px;
        bottom: 5px;
        width: 20px;
        height: 20px;
        background-position: 0 0;
      }
    }
  }

  .bottom {
    font-size: 12px;
    width: 100px;

    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }

    .artist {
      color: #666;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
