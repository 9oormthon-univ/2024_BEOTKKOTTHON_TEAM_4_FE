import { Colors } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  & > .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 20px;
    gap: 10px;
    overflow-y: auto;
    & > div {
      //width: 16vh;
      //height: 200px;
      background-color: ${Colors.Gray200};
    }
  }
`;
