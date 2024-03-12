import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CssArchiveType } from '../atomType';
import { CheckBoxStyleType } from '../atomType';
import { Colors, flexCssGenerator, fontGenerator } from '@globalStyles';

export const CheckBoxStyles: CssArchiveType = {
  default: css`
    display: inline-flex;
    align-items: center;
    min-width: fit-content;

    & .common-icon {
      margin: 0;
      cursor: pointer;
    }

    & input {
      display: none;
    }

    & span.check__box--description {
      color: ${Colors.Gray500};

      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.5rem;

      margin-left: 1rem;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `,
  medium: css`
    font-size: 2rem;

    & > span.common-icon {
      font-size: 2rem;
    }
    & > span.check__box--description {
      font-size: 1.5rem;
    }
  `,
  mediumAndBlack: css`
    font-size: 2rem;

    & > span.common-icon {
      font-size: 2rem;
    }
    & span.check__box--description {
      font-size: 1.5rem;
      color: ${Colors.Black};
      font-weight: 600;
      line-height: 1.5rem;
    }
  `,
  small: css`
    font-size: 1.6rem;

    & > span.common-icon {
      font-size: 1.6rem;
    }
    & > span.check__box--description {
      font-size: 1.2rem;
    }
  `,
  circleBox: css`
    ${flexCssGenerator('flex', 'center', 'center')}
    height: 2.7rem;
    padding: 0.6rem 1.6rem;
    border-radius: 1.6rem;
    background-color: ${Colors.White};
    cursor: pointer;

    box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.1);

    & > span.common-icon {
      display: none;
    }

    & > span.check__box--description {
      ${fontGenerator('1.3rem', '600', '1.5rem')}
      margin: 0;
      color: ${Colors.Black};
    }
  `,
};

export const CheckBox = styled.label<CheckBoxStyleType>`
  ${CheckBoxStyles.default}
  ${(props) => props.variant && CheckBoxStyles[props.variant]}
  ${(props) =>
    props.checked === true
      ? css`
          .material-symbols-outlined {
            font-variation-settings:
              'FILL' 1,
              'wght' 400,
              'GRAD' 0,
              'opsz' 24;
          }
        `
      : css``}
  ${(props) =>
    props.variant === 'circleBox' && props.checked
      ? css`
          background-color: ${Colors.Primary01};

          & > span.check__box--description {
            color: ${Colors.White};
          }
        `
      : css``}}
  ${(props) => props.customStyle}
`;
