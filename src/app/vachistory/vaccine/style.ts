import { Colors } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  & > .body {
    padding: 14px 20px;
    & > .content_wrap {
      padding: 14px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
