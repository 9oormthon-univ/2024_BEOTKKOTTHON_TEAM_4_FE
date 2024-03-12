import styled from '@emotion/styled';
import {Colors, fontGenerator} from '@globalStyles';
import { InputFormType } from '../atomType';
import { CssArchiveType } from '../atomType';
import { css } from '@emotion/react';

export const InputFormSizes: CssArchiveType = {
  default: css`
    display: inline-flex;
    flex-direction: column;
    position: relative;

    width: 100%;

    & > div.input__content {
      position: relative;
      width: 100%;
      height: 100%;

      & > input.input__content--input {
        width: 100%;
        height: 3.7rem;
        padding: 20px;
      }

      //왼쪽에 아이콘 존재시
      &:has(span.input__content--left__icon) {
        & > input.input__content--input {
          padding-left: 4rem;
        }
      }

      //오른쪽에 아이콘 존재시
      &:has(span.input__content--right__icon) {
        & > input.input__content--input {
          padding-right: 4rem;
        }
      }

      & > span.common-icon {
        position: absolute;

        &.input__content--left__icon {
          left: 1.6rem;
          transform: translate(0%, 70%);
        }

        &.input__content--right__icon {
          right: 1.6rem;
          transform: translate(0%, 70%);
        }
      }
    }

    & div.input-form__description {
      margin-top: 1rem;
    }
  `,
  medium: css`
    width: 36rem;
  `,
  small: css``,
  half: css`
    width: 17.8rem;
  `,
};

export const InputFormStyles: CssArchiveType = {
  default: css`
    & > div.input__content {
      & > input.input__content--input {

        ${fontGenerator('1rem', '400', '1rem', '-0.3px')}

        border: solid 0.1rem ${Colors.Gray200};
        border-radius: 8px;
        color: ${Colors.Gray500};
        background-color: ${Colors.Gray50};

        &:focus {
          background-color: ${Colors.White};
          outline: none;
          color: ${Colors.Black};
          border: solid 0.1rem ${Colors.Primary};
        }

        &::placeholder {
          color: ${Colors.Gray500};
        }

        &:disabled {
          color: ${Colors.Gray600};
          background-color: ${Colors.Gray50};
          border: solid 0.1rem ${Colors.Gray400};
        }
      }
    }

    & div.input-form__description {
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 0.6rem;
    }
  `,
  error: css`
    & > div.input__content {
      & > input.input__content--input {
        border: solid 0.1rem ${Colors.Error};

        &:focus {
          outline: none;
          border: solid 0.1rem ${Colors.Error};
        }
      }

      & > span.common-icon {
        color: ${Colors.Error};
      }
    }

    & div.input-form__description {
      color: ${Colors.Error};
    }
  `,
  search: css`
    & > div.input__content {
      display: flex;
      align-items: center;

      & > input.input__content--input {
        height: 4.4rem;
        padding: 0 1rem 0 2rem;
        border-radius: 1.4rem;
        border: solid 0.1rem rgba(134, 197, 255, 0.2);
        background-color: solid 0.1rem ${Colors.Gray500};
      }

      & > span.common-icon {
        position: absolute;
        cursor: pointer;

        &.input__content--left__icon {
          left: 2rem;
          transform: translate(0%, 0%);
        }

        &.input__content--right__icon {
          right: 1rem;
          transform: translate(0%, 0%);
        }
      }

      //왼쪽에 아이콘 존재시
      &:has(span.input__content--left__icon) {
        & > input.input__content--input {
          padding-left: 5.4rem;
        }
      }

      //오른쪽에 아이콘 존재시
      &:has(span.input__content--right__icon) {
        & > input.input__content--input {
          padding-right: 4.4rem;
        }
      }
    }

    & div.input-form__description {
      color: ${Colors.Error};
    }
  `,
};

export const InputWrapper = styled.div<InputFormType>`
  ${InputFormStyles.default}
  ${InputFormSizes.default}
  ${(props) => props.size && InputFormSizes[props.size]}
  ${(props) => props.variant && InputFormStyles[props.variant]}
  ${(props) => props.customStyle}
`;
