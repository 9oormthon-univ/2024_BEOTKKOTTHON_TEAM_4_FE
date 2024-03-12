import styled from '@emotion/styled';
import { css } from '@emotion/react';

// typings
import { CssArchiveType, CustomStyleType } from '@typings/commonUseType';

export const RadioBoxSizes: CssArchiveType = {
  medium: css`
    font-size: 1.4rem;

    & .common-icon {
      font-size: 1.6rem;
    }
  `,
  small: css`
    font-size: 1.2rem;

    & .common-icon {
      font-size: 1.4rem;
    }
  `,
};

export const RadioBoxWrapper = styled.div<CustomStyleType>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & .common-icon {
    margin-right: 0.4rem;
  }

  & label {
    display: flex;
    align-items: center;
    margin-right: 1.6rem;
    padding: 0.8rem 0;
    cursor: pointer;
  }

  & input {
    display: none;
  }

  ${(props) => RadioBoxSizes[props.variant || 'medium']}
  ${(props) => props.customStyle}
`;
