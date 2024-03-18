import { Colors } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 20px;

  & > .head {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > .body_wrap {
    & > .content_head {
      height: 54px;
      display: flex;
      align-items: center;

      justify-content: space-between;
    }
    & > .content_body {
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      gap: 15px;
      margin-top: 20px;
      & > .item {
        width: 100px;
        height: 100px;
        flex-shrink: 0;
        background-color: ${Colors.Gray200};
      }
    }
    & > .content_more {
      margin-bottom: 30px;
    }
  }
`;
