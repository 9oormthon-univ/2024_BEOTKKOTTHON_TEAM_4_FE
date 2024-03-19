import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { fontGenerator } from '@/styles';

export const MenuTitleContainer = styled.main`
  & > .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    //padding: 0 20px;
    box-sizing: border-box;
    & > .content_title {
      ${fontGenerator('16px', '700', '32px')}
    }
    & > span {
      width: 24px;
    }
  }
`;
