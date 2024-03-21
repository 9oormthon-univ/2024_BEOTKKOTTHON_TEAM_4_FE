import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const SignupDoneWrap = styled.main`
  height: 100%;

  & > .padding {
    padding: 0 20px 20px 20px;
    height: 100%;
    & > main {
      & > div {
        height: calc(100vh - 130px);
      }
    }
  }
`;
