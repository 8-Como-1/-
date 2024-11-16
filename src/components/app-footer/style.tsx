import styled from "styled-components";

export const UIAppFooter = styled.div`
   height:325px;
   color:#666;
   font-size: 12px;
   line-height: 24px;
   background: #f2f2f2;
   border-top: 1px solid #d3d3d3;

    a {
    cursor: pointer;
    color: #666;
    display: inline;

    &:hover {
       text-decoration: underline;
    }
  }

   .content{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      // background-color: skyblue;  

      .last{
        margin-bottom:20px;
      }
   }
`