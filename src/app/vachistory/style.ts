import { Colors, fontGenerator } from '@/styles';
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
      margin: 10px -20px 17px 0;
      & > .item {
        //width: 100px;
        //height: 100px;

        flex-shrink: 0;
        background-color: ${Colors.Gray200};
      }
    }
    & > .content_body::-webkit-scrollbar {
      display: none;
    }
    & > .content_more {
      margin-bottom: 30px;
    }
    & > .vaccine_wrap {
      padding: 10px 0;
      & > .category {
        ${fontGenerator('14px', '600', '16.71px')}
        color: ${Colors.Gray700};
        font-family: 'Pretendard', sans-serif;
        padding: 10px 0;
      }
      & > .vaccine_list {
        display: flex;
        flex-direction: row;
        gap: 10px;
        overflow-x: scroll;
        & > .item {
          width: 245px;
          height: 92px;
          border: 1px solid Black;
          flex-shrink: 0;
        }
      }
      & > .vaccine_list::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
