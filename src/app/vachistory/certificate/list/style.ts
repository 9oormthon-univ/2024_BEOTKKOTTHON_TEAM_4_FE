import { Colors } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  & > .container {
    display: flex;
    justify-content: center;

    & > .list {
      margin-bottom: 70px;

      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 20px 20px;
      gap: 10px;
      overflow-y: auto;
      max-width: 370px;
      & > div {
        //width: 16vh;
        //height: 200px;
        background-color: ${Colors.Gray200};
      }
      @media (max-width: 370px) {
        justify-content: center;
      }
    }
  }
`;
