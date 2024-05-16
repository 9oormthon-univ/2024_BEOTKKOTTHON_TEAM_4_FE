import { Colors } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  & > .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    .button {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`;
