import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin-bottom: 300px;

  & > .head {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    text-align: left;
  }

  & > .body_wrap {
    padding: 0 20px;
    color: #000000;

    & > .content_body {
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      gap: 10px;
      margin: 10px 20px;
      & > .item {
        width: 100px;
        height: 100px;
        flex-shrink: 0;
        opacity: 1;
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
