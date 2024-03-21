import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const SignupDoneWrap = styled.main`
  height: 100%;

  & > .padding {
    padding: 0 20px 20px 20px;
    height: 100%;

    & > .password {
      display: flex;
      justify-content: center;
      padding: 20px;
      color: ${Colors.Gray500};
      text-decoration: underline;
      ${fontGenerator('14px', '600', '16px', '-0.3px')};
    }
  }
`;
