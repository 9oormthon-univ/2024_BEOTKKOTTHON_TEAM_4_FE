import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';

export const WarningToastWrapContainer = styled.main`
  //margin: 10px 20px;
  & > div {
    bottom: 76px;
    margin: 10px;
    width: calc(100% - 40px);
    & > img {
      width: 29px;
      height: 28px;
    }
    & > span {
      ${fontGenerator('16px', '600', '20px', '-0.3px')}
    }
  }
`;
