import styled from 'styled-components';

export const UIRecommendWrapper = styled.div`
  .content {
    border: 1px solid #d3d3d3;
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    display: flex;

    .left {
      padding: 20px;
      width: 690px;
    }

    .right {
      margin-left: 1px;
      width: 250px;
    }
  }
`;
