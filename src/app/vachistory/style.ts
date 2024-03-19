import { Colors } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  & > .head {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > .body_wrap {
    padding: 0 20px;

    & > .content_body {
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      gap: 15px;
      margin: 10px -20px 10px 0;
      & > .item {
        //width: 100px;
        //height: 100px;

        flex-shrink: 0;
        background-color: ${Colors.Gray200};
      }
    }
    & > .content_more {
      margin-bottom: 30px;
    }
  }
`;
